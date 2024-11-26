const express =require('express');
const app=express();
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your production frontend URL
  credentials: true, // Allow cookies
}));

app.use(express.json())
const mongoose=require('mongoose');
const {dbConnection}=require('./config/db')
const {NewUserModel}= require('./models/userModel');
const jwt = require('jsonwebtoken');
const  authjwt  = require('./middleware/auth');
const key="s3cret"
const bcrypt=require('bcrypt')
const cookieParse=require('cookie-parser')
 mongoose.connect(dbConnection)
app.post('/api/signup', async(req,res)=>
{
    try {
    const username= req.body.name;
    const email= req.body.email;
    const password= req.body.password;
    const hashedPassword=await bcrypt.hash(password,10);
    const response= await NewUserModel.findOne({
        email:email
    })
       if (response) {
        res.json({
            msg:"User with this email is already registred try with another email"
        })
       } else {
        await NewUserModel.create(
            {
                username:username,
                email:email,
                password:hashedPassword
            }
        )
        res.status(200).json (
            {
                msg:"User created successful"
        
            })
       }
    

        
    } catch (error) {
        console.error('Error while creating user:', error.message);

        // Send appropriate response
        res.status(500).json({
            msg: "An error occurred",
            error: error.message,
    }
)}
})
app.post('/api/signin', async(req,res)=>
{
   try {
    const{email,password}=req.body;
    
    const response= await NewUserModel.findOne({
        email:email,
    })
    if(!response)
        {
            res.json({
                msg:"User is not in DB"
            })
        }

    console.log('Password:', password);
console.log('Hashed Password:', NewUserModel.password);

    const isMatch= await bcrypt.compare(password,response.password)

    
    if(!isMatch)
    {
        res.json({
            msg:'Invalid Credentials'
        })
    }
   if(response)
     {
        const token= jwt.sign(
          {  id:response._id.toString()},
                  key,        // Secret key from env file
                { expiresIn: '1h' }            
        )
            
        res.cookie('token', token, {
            httpOnly:true,
            sameSite:'strict',
            maxAge: 3600*1000,
            secure:true
        });
        res.status(200).json({
            msg:"User is Authenicated",
        
        })
     }
   
   } catch (error) {
    console.log("Error while checking user", error.message);
     res.status(502).json({
        msg:"An Error occured",
        error:error.message,
     })
    
   }
   
})

app.get('/api/dashboard', cookieParse(),authjwt, (req, res) => {
    res.json({ msg: `Welcome to your dashboard, user ID: ${req.userid}` });
});
app.post('/api/logout',(req,res)=>
{
 try {
    res.cookie('token', ' ',
        {
            httpOnly:true,
            sameSite:'strict',
            maxAge:0
        }
     )
     res.status(200).send('Cookie krdi clear')
 } catch (error) {
    res.status(502).json(
        {
            msg:"An error occur",
            error:error.message,
        }
    )
 }
})

app.listen(3000);
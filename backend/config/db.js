require('dotenv').config();
const dbConnection=process.env.DATABASE_URL;

module.exports={dbConnection}
const jwt = require('jsonwebtoken');
const key= "s3cret";



function authjwt(req, res, next) {
    try {
        const tokenCookie = req.cookies.token;
        
        // Check if the Authorization header exists
        if (! tokenCookie) {
            return res.status(401).json({ msg: "No token provided or invalid format" +tokenCookie });
        }

    

        // Verify the token
        const decoded = jwt.verify( tokenCookie, key);

        // Attach user ID to the request object
        req.userid = decoded.id;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error("Error in authjwt middleware:", error.message);
        res.status(403).json({ msg: "Invalid or expired token", error: error.message });
    }
}

module.exports =  authjwt ;

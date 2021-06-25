import jwt from "jsonwebtoken";

//middleware for authentication
const auth = (req,res,next) => {
    const token = req.header.token
    console.log({token})
    if(!token){
        // return res.redirect(`http://localhost:3000/`)
        return res.status(401).json({
            data:{},
            message:"Please Login!"
        })
    }
    try{
        console.log(req.header)
        const decoded = jwt.verify(token, "jwt_secret");
        console.log("decoded",decoded)
        next();
    }
    catch (e) {
        console.error(e);
        res.status(403).json({
            message: 'Invalid Token!!',
             data:{}});
    }
}

export default auth;
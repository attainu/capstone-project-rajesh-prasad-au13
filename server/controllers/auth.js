import jwt from "jsonwebtoken";

const auth = (req,res,next) => {
    const token = req.header.token
    console.log({token})
    if(!token){
        return res.redirect(`http://localhost:3000/login`)
        // return res.status(401).json({
        //     data:{},
        //     message:"Please Login!"
        // })
    }
    try{
        console.log(req.header)
        const decoded = jwt.verify(token,process.env.ACCESS_SECRET_TOKEN);
        console.log("decoded",decoded)
        // req.user = decoded.user;
        next();
    }
    catch (e) {
        console.error(e);
        res.status(403).json({
            message: 'Invalid Token!!',
            //  error:[],
             data:{}});
    }
}

export default auth;
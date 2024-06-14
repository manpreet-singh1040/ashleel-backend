import express from 'express'
import jwt from 'jsonwebtoken'

const LoginRouter = express.Router();

LoginRouter.post('/',(req,res)=>{
    let body=req.body;
    try{
        //to check if user is present in db
        let payload=body.username;
        let sessionToken=jwt.sign(payload,"jwtkey");
        res.cookie("sessionToken",sessionToken,{
            httpOnly:false,
            maxAge:9000000,
            path:'/',
            secure:true,
            sameSite:'none'
        });
        console.log(`cookie send!!`);
        res.json({status:true});
    }
    catch(err){
        console.log("invalid username and password!!");
        console.log(err);
        res.json({status:false});
    }
})

export default LoginRouter
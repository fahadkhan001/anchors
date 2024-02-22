import  express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import  path from 'path'




mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});


const __dirname = path.resolve() 

const app = express();

app.use(express.json())


app.use(express.urlencoded({extended:true}))

app.use(cookieParser());


app.listen(3000,()=>{
    console.log("Server is Running on port 3000")
});





//middleware
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message||'Internal server Error index.js'
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});
import express from 'express';
import cors from 'cors';
import {} from  'dotenv/config';
const app = express();
const port = process.env.PORT || 5000;
import userRouter from './routes/userRoutes.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import db from './config/db.js';
import cookieParser from 'cookie-parser';

db();


app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send("hello");
});


//api path
app.use('/api/users',userRouter);

//using errormiddwares
app.use(notFound);
app.use(errorHandler)

app.listen(port,()=>{
    console.log("server is running on port "+port);
})
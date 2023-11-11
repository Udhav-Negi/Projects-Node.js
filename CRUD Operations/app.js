import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
const app = express();
// const port = process.env.PORT || 3000;
const port = process.env.PORT ;
import path from 'path'
import mongoose from 'mongoose'
import ejs from 'ejs'

// imports 
import connectDb from './db/connectdb.js';
import router from './routes/web.js';

//connect database 
connectDb();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : false}));
app.use('/student', express.static(path.join(process.cwd(), "public")));


//routes 
app.use('/student', router);


app.listen(port,'127.0.0.1', ()=>{
    console.log(`Click http://localhost:${port}/student`)
})




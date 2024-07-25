import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.urlbd)
.then(() => {
    console-log('si funciona')

})
.catch((error) => {
    console.log('no jala')
})

const app=express();
app.use(cors())

app.listen(4000, () => {
    console.log('si se escucha xd el server local')
})


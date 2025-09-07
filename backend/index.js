import express from 'express';
import dotenv from 'dotenv';
import connectdb from './config/db.js';
import cookieParser from 'cookie-parser';
import authrouts from './routes/Authroutes.js';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js';

dotenv.config();
let port = process.env.PORT || 6000;

let app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))

app.use("/api/auth",authrouts)
app.use("/api/user",userRoutes)

app.listen(port, () => {
    console.log(`server connected`);
    connectdb()
});

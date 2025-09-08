import express from 'express'
import isAuth from '../middleware/isAuth.js'
import { getcorentuser } from '../controller/usercontroller.js'
import { logout } from "../controller/authcontroller.js";


let userRoutes = express.Router()

userRoutes.post("/getcurrentuser",isAuth,getcorentuser)
userRoutes.get("/logout", logout);



export default userRoutes
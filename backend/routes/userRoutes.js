import express from 'express'
import isAuth from '../middleware/isAuth.js'
import { getAdmin, getcorentuser } from '../controller/usercontroller.js'
import { logout } from "../controller/authcontroller.js";
import adminAuth from '../middleware/adminAuth.js';


let userRoutes = express.Router()

userRoutes.get("/getcurrentuser",isAuth,getcorentuser)
userRoutes.get("/logout", logout);
userRoutes.get("/getadmin", adminAuth, getAdmin);



export default userRoutes
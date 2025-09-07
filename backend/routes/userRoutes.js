import express from 'express'
import isAuth from '../middleware/isAuth.js'
import { getcorentuser } from '../controller/usercontroller.js'

let userRoutes = express.Router()

userRoutes.post("/getcurrentuser",isAuth,getcorentuser)

export default userRoutes
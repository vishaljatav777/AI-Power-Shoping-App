import express from 'express'
import { googlelogin, login, logout, registration } from '../controller/authcontroller.js'

const authrouts = express()

authrouts.post("/registration",registration)
authrouts.post("/login",login)
authrouts.get("/logout",logout)
authrouts.post("/googlelogin", googlelogin)


export default authrouts
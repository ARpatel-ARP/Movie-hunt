//step-1
//const express = require("express")
import dns from 'node:dns/promises';
dns.setServers(['8.8.8.8', '8.8.4.4']); // Forces Node to use Google DNS
import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./utils/database.js"
import cookieParser from "cookie-parser"
import UserRoute from "./routes/UserRoute.js"
import cors from "cors"

dotenv.config({
    path: "./.env"
})
databaseConnection()
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials:true

}

app.use(cors(corsOptions))


//api
app.use("/api/v1/user", UserRoute)
//http://localhost:8000/api/v1/user/register


app.listen(process.env.PORT, ()=>{
    console.log(`Server is listen at port ${process.env.PORT} `)
})
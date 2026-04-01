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
import path from 'node:path';

dotenv.config({
    path: "./.env"
})
databaseConnection()
const app = express()

const _dirname = path.resolve()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
const corsOptions = {
    origin: 'https://movie-hunt-89nk.onrender.com',
    credentials:true

}

app.use(cors(corsOptions))


//api
app.use("/api/v1/user", UserRoute)
//http://localhost:8000/api/v1/user/register

app.use(express.static(path.join(_dirname, "/netflix/dist")))
app.get('*splat', (_, res) => {
    res.sendFile(path.resolve(_dirname, "netflix", "dist", "index.html"))
})
  


app.listen(process.env.PORT, ()=>{
    console.log(`Server is listen at port ${process.env.PORT} `)
})
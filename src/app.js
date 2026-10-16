import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true,
})) 

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))

app.use(express.static("public"))


// this is used for that I can access cookies of user browser through mt browser and also able to set it. Basically I can perform CRUD operations on user's cookie
app.use(cookieParser())


export { app } 
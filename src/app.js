import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

/* Configuration */

// set reference for our frontend to access backend
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))  // set limit to size of json file received
app.use(express.urlencoded({ extended: true, limit: "16kb" }))  // url encoding
app.use(express.static("public")) // save files on server
app.use(cookieParser()) // cookies on browerser/user side

//routes import
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users",userRouter)

export { app }
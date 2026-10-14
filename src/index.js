//require('dotenv').config({path: './env'})

// this is inconsistency and somewhere we are using import and also require.. this is a very common problem

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})



connectDB()

















// import express from "express"
// const app = express()


// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Application is not able to talk to the database" , error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     }catch(error){
//         console.log("Error:", error);
//         throw err
        
//     }
// })()
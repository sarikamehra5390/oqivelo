//require('dotenv').config({path: './env'})

// this is inconsistency and somewhere we are using import and also require.. this is a very common problem

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})



connectDB()

//.then() is a method used with a Promise. It executes a callback when the Promise is fulfilled (successful).

//Notice that there are two callbacks in your code:
// - The .then() callback runs after the database connects.
// - The app.listen() callback runs after the server starts listening.

.then(() => {
    const server = app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })

    // listen the  http server error 
    server.on("error", (err) => {
        console.log("SERVER ERROR !!!" , err)
    })
})
.catch((err) => {
    console.log("MONGO DB CONNECTION FAILED !!!", err)
})

















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
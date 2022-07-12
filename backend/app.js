import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-router.js";
import router from "./routes/user-routes";
import cors from "cors";//Access-Control-Allow-Origin, 
//allow all domain, This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.


const app = express()
const Port = process.env.PORT || 5000
const {MONGOURI} = require('./keys')
//require('/keys')

app.use(cors());//
app.use(express.json());
app.use("/api/user", router); //here giving url path e.g. http://localhost:5000/api/user/ ...all of routers will work
app.use("/api/blog", blogRouter);

mongoose.connect(
    MONGOURI
).then(() => app.listen(Port)
).then(() =>
    console.log("Connected to Port!")
).catch((err) => console.log(err));


//app.listen(5000);

//diksha90096  admin

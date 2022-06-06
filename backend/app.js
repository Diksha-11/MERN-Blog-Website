import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-router.js";
import router from "./routes/user-routes";
import cors from "cors";


const app = express()

app.use(cors());
app.use(express.json());
app.use("/api/user", router); //here giving url path e.g. http://localhost:5000/api/user/ ...all of routers will work
app.use("/api/blog", blogRouter);

mongoose.connect(
    'mongodb+srv://admin:diksha90096@cluster0.sewn6.mongodb.net/BlogApp?retryWrites=true&w=majority'
).then(() => app.listen(5000)
).then(() =>
    console.log("Connected to Port!")
).catch((err) => console.log(err));


//app.listen(5000);

//diksha90096  admin
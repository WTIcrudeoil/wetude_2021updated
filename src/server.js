import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";


//make an express application
const app = express();
const logger = morgan("dev");

const routerLogger = (req,res,next) =>{
next();
}

const home = (req,res) => res.send("hello");

app.set("view engine","pug");
app.set("views",process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/users",userRouter);

export default app;
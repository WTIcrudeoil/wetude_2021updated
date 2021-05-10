import express from "express";
// const app = express();
import morgan from "morgan";

const PORT = 4000;

//make an express application
const app = express();
const logger = morgan("dev");

const globalRouter = express.Router();

const handleHome =(req,res) => res.send("Home");

globalRouter.get("/",handleHome);

const userRouter = express.Router();

const handleEditUser = (req,res) => res.send("Edit User");

userRouter.get("/edit",handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req,res) => res.send("Watch Video");

videoRouter.get("/watch",handleWatchVideo);


const routerLogger = (req,res,next) =>{
next();
}

const home = (req,res) => res.send("hello");


app.use(logger);

app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/users",userRouter);


const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`)

app.listen(PORT,handleListening)

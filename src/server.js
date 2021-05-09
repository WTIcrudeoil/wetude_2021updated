import express from "express";
// const app = express();
import morgan from "morgan";

const PORT = 4000;

//make an express application
const app = express();
const logger = morgan("dev");

const routerLogger = (req,res,next) =>{
next();
}

const home = (req,res) => res.send("hello");


app.use(logger);
app.get("/",home);


const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`)

app.listen(PORT,handleListening)

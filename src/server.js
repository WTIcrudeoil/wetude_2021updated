import express from "express"
// const app = express();

const PORT = 4000;

//make an express application
const app = express();

app.get("/", (chicken,res)=> res.send("<h1>I still love you.</h1>"));
app.get("/login", (req,res)=> res.send("Login here."));

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`)

app.listen(PORT,handleListening)

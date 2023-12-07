//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

var password = "ILoveProgramming";


const passChecker = (req, res, next) => {
    console.log(req.body);
    if (req.body["password"] !== password){
        res.sendFile(__dirname + "/public/index.html");
    }
    next();

}

app.use(passChecker);



app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req,res) => {
    res.sendFile(__dirname + "/public/secret.html");
})



app.listen(PORT,(req,res) => {
    console.log("Listening on port "+ PORT);
})



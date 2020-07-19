const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("./client"));
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json({
        message:'Good connected!',
    }) ;
});
const data = require('./data.js');
// routes goes here...
app.get("/getChallenge",(req,res)=>{
    let questions = data.questions;
    let randomIndex = generateRandomIndex(questions.length);
    res.json(questions[randomIndex]);
});


app.get("/loadAlgos",(req,res)=>{
    let algos = data.algorithms;
    res.json(algos);
});

app.listen(port,()=>console.log(`listening on port: ${port}`));


function generateRandomIndex(totalLength){
    let randomIndex;
    for(let i = 0;i<5;i++){
        randomIndex = Math.floor(Math.random()*totalLength);
    }
    return randomIndex;
}
const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
const zodInput = require('./verification/zodInput');
const { signUpInput, signInInput } = zodInput;

app.use(express.json());

app.get("/signup", (req, res)=>{
    const { email, password, name, age} = req.body
    const result = signUpInput.safeParse({email, password, name, age});
    const token = jwt.sign({email}, process.env.JWT_PASSWORD)
    if(result.success){
        res.sendStatus(200).json({
            message: "Welcome"
        })
    }
})

app.get("/signin", (req, res)=>{
    const { email, password} = req.body
    const result = signInInput.safeParse({email, password});
    if(result.success){
        res.sendStatus(200).json({
            message: "DigiCare Portal"
        })
    }   
})

app.listen(3000)
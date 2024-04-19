const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const zodInput = require("./verification/zodInput");
const { signUpInput, signInInput } = zodInput;

app.use(express.json());

app.post("/signup", (req, res) => {
  const { email, password, name, age } = req.body;
  const result = signUpInput.safeParse({ email, password, name, age });
  const token = jwt.sign({ email }, process.env.JWT_PASSWORD);
  if (result.success) {
    res.sendStatus(200).json({
      message: "Welcome",
    });
  }
});

app.post("/signin", (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
  const { email, password } = req.body;
  const result = signInInput.safeParse({ email, password });
  if (result.success && decoded.email === email) {
    res.sendStatus(200).json({
      message: "DigiCare Portal",
    });
  }
});

app.listen(3000);

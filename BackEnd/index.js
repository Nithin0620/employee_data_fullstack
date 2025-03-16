const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

const employee = require("./routes/employee");
app.use("/api/v1",employee);

app.listen(PORT,()=>{
   console.log(`Server is running on port ${PORT}`);
})

const connectDB = require("./config/database");
connectDB();

app.get("/",(req,res)=>{
   res.send("Hello World");
})


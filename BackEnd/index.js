const express = require("express");
// const mongoose = require("mongoose");
const app = express();

const cors = require("cors");

// Allow requests from all origins
app.use(cors());

// OR Allow only specific origins
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));


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


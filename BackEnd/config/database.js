const mongoose = require("mongoose");
require("dotenv").config();

const connectDB=()=>{
      mongoose.connect(process.env.DATABASE_URL,{
         // useNewUrlParser:true,
         // useUnifiedTopology:true,
      })
      .then(()=>{
         console.log("Database connected successfully");

      })
      .catch((err)=>{
         console.log("Error occured during database connection");
         console.error(err.message);
         process.exit(1);
      })
}

module.exports = connectDB;
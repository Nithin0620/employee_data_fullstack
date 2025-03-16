const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
   {
      name:{
         type:String,
         required:true,
      },
      email:{
         type:String,
         required:true,
         unique:true,
      },
      Phone:{
         type:Number,
         required:true,
         unique:true,
      },
      experience:{
         type:Number,
         required:true
      },
      department:{
         type:String,
         required:true,
         maxlength:50,
      },
      role:{
         type:String,
         required:true,
      }
   }
)

module.exports = mongoose.model("Employee",employeeSchema);
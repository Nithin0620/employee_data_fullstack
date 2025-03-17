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
      title:{
         type:String,
         required:true,
         // unique:true,
      },
      department:{
         type:String,
         required:true,
         maxlength:50,
      },
      role:{
         type:String,
         required:true,
      },
      image:{
         type:String,
         required:false,
      }

   }

)

module.exports = mongoose.model("Employee",employeeSchema);
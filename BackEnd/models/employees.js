const mongoose = require("mongose");

const employeeSchema = new mongoose.schema(
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

module.exports = mongoose.Schema("Employee",employeeSchema);
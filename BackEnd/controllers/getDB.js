const employee = require("../models/employees");

const getDB = async (req,res)=>{
   try{
      const data = await employee.find();
      res.status(500).json({
         success:true,
         data:data,
         message:"Data fetched Successfully",
      })
   }
   catch(e){
      console.log(e);
      res.status(500).json({
         success:false,
         message:"Error occured during fetching data from database",
      })
   }
}

module.exports = getDB;
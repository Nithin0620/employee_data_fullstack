const employee = require("../models/employees");

const deleteDB = async (req,res)=>{
   try{
      const email = req.body.email;
      const deletedData = await employee.findOneAndDelete({email:email});
      
      if(!deletedData){
         res.status(404).json({
            success:false,
            message:"data with this email is not found",
         })
      }
      if(deletedData){
         res.status(200).json({
            success:true,
            message:"data deleted Successfully",
            data: deletedData,
         })
      }
   }
   catch(e){
      console.log(e);
      console.error("Error occured during database deletion");
      res.status(500).json({
         success:false,
         message:"Error occured during database deletion",
      })

   }
}

module.exports = deleteDB;
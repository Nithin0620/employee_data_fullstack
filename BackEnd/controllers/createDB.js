// const mongoose = require("mongoose");
const Employee = require("../models/employees");

const createDB = async (req,res)=>{
   try{

      const {name,email,phone,experience,department,role}= req.body;
      if (!name || !email || !phone || !experience || !department || !role) {
         return res.status(400).json({ message: "All fields are required" });
      }
      const newEmployee = new Employee( {
         name,
         email,
         phone,
         experience,
         department,
         role,
      })
      const savedEmployee = await newEmployee.save(); 

      res.status(200).json({
         success:true,
         data:savedEmployee,
         message:"data created successfully",
      })

   }
   catch(e){
      console.log(e.message);
      res.status(500).json({
         success:false,
         message:"Error occured during database creation",
      })
   }
}

module.exports = createDB;
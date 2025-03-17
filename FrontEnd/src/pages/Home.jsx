// import React from 'react'
// import {useState , useEffect} from 'react'
// import {Link} from 'react-router-dom'
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Home(){
  const [empData, setEmpData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // if(empData.length === 0){
  //   const length = false;
  // }


  const getAlldata = async ()=>{
    try{
      const getPeople = await fetch (`${process.env.REACT_APP_BASE_URL}/getallUsers`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
      });

      const result = await getPeople.json();
      setEmpData(Array.isArray(result.data) ? result.data : []);
      
    }
    catch(e){
      console.log(e);
      setError(error.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    getAlldata();
  },[]);
  // console.log(empData);

  if (isLoading) return <div className="text-center p-4 text-white">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  // if (!empData.length) return <div className="text-center p-4 text-white">No employees found.</div>;
  return (
    <div className="container px-4 mx-auto py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Employees
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            This is a list of all employees. You can add new employees, edit or delete existing ones.
          </p>
        </div>
        <Link to={"/addemployee"}>
          <button className="active:scale-[0.80] duration-[1] scroll-smooth   rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:text-fuchsia-100 hover:bg-indigo-500 hover:font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
            Add Employee
          </button>
        </Link>
      </div>
      <div className="flex flex-col mt-6 -mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8  min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  Employee
                </th>
                <th scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  Title
                </th>
                <th scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  Role
                </th>
              </tr>
            </thead>

            {empData.length === 0 ?
               <div className="text-cyan-200 font-bold font-serif text-[25px] align-top mx-auto my-7 flex justify-center items-center">No Employees found</div>:
               <div></div>
            }

            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                {empData?.map((person)=> (
                  <tr  key={person._id}>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full object-cover" src={person?.image || "default.jpg"} alt="" />

                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {person.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-12 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {person.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-300">
                        {person.department}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {person.role}
                    </td>
                  </tr>

                ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Home;
import React from 'react'
import {Link} from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'
import Form from '../components/Form'


const CreateDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover object-top"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
          <h3 className="text-4xl font-bold text-white">
          Empower your business with our employee creation!
          </h3>
        </div>
      </div>
      <div className="flex flex-col mx-auto min-w-[600px] justify-start px-4 py-2 sm:px-6 sm:py-16 lg:px-8 lg:py-24 xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl"> 
          Create a Employee
        </h2>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
          
          <Link to={"/"} className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700 flex items-center gap-3">
            <FaBackward />
            Back to all Employee List
          </Link>
        </p>
        <Form/>
        
      </div>
    </div>
  )
}

export default CreateDetails

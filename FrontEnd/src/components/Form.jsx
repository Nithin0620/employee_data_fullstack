import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Form = () => {
  const {register , handleSubmit} = useForm();
  const navigate = useNavigate();
  const notify = () => toast('Email Already Exists!');
  const notify2 = () => toast('Please fill all Fields!');


  async function createEmployee (data){
    const savedUserResponse = await fetch(`${process.env.REACT_APP_BASE_URL}/createdb`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({...data}),
    })
    console.log(savedUserResponse);
    if(savedUserResponse.status===500){
      console.log("Error in creating Employee");
      notify();
    }
    if(savedUserResponse.status===400){
      console.log("Error in creating Employee");
      notify2();
    }
    navigate("/");
  };
  return (
    <div>
      
      <form onSubmit={handleSubmit(createEmployee)} className="mt-8">
        <div>
          <div>
            <label htmlFor="name"
              className="text-base font-medium text-gray-900 dark:text-gray-200">  
              {" "}
              Employee Name{" "}
            </label>
              <input
                className="mt-2.5 flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text" placeholder='Enter your Full Name' {...register("name")}></input>

          </div>
          <div>
            <label htmlFor="email"
              className="text-base font-medium text-gray-900 dark:text-gray-200">
                {" "}
                Employee Email Id{" "}
            </label>
            <input
              className="mt-2.5 flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="email" placeholder='Enter your Email ID'  {...register("email")}/>
          </div>

          <div>
            <label htmlFor="title"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Employee Title{" "}
            </label>
            <input
                className=" mt-2.5 flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Employee Title"
                {...register("title")}
              ></input>
          </div>
          <div>
            <label
              htmlFor="department"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Employee Department{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Employee Department"
                {...register("department")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="role"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Employee Role{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Employee Role"
                {...register("role")}
              ></input>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className=" mt-5 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Create Employeee
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>


        </div>
      </form>
    </div>
  )
}

export default Form

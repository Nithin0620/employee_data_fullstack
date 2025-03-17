import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { ToastContainer, toast,Zoom } from 'react-toastify';
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Zoom}
    />
  </React.StrictMode>
);

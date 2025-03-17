import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import CreateDetails from "./pages/CreateDetails";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "",
            element: <Home />,
         },
         {
            path: "addemployee",
            element: <CreateDetails />,
         },
         {
            path: "*",
            element: <NotFound />,
         }
      ]
   }
]);


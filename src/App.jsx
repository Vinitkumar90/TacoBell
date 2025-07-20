import React , {lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , RouterProvider, Outlet } from "react-router";
import ResturantMenu from "./components/ResturantMenu";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet /> 
    </div>
  );
};


const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      },{
        path:"/resturant/:resId",
        element:<ResturantMenu/>
      }
    ],
    errorElement:<Error />
  }
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

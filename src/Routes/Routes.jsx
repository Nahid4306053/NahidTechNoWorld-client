import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Signup from "../pages/Signup";
import Login from "../pages/logIn";
import AuthnicationContext from "../Context/AuthnicationContext";
import PrivateRouter from "./PrivateRouter";
import AuthHandler from "./AuthHandler";
import ProductDetails from "../pages/ProductDetails";
import AddProduct from "../pages/AddProduct";
import BrandPreview from "../pages/BrandPreview";
import UpdateProduct from "../pages/UpdateProduct";
import Mycart from "../pages/Mycart";
import TemplateMoodContext from "../Context/TemplateMoodContext";
const CreateDRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthnicationContext><TemplateMoodContext><MainLayouts/></TemplateMoodContext></AuthnicationContext>,
    errorElement: <TemplateMoodContext><Notfound /></TemplateMoodContext>,
    children: [
      {
        path: "/",
        element: <Home/>
      },      
      {
        path: "/product-details/:id",
        loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`),
        element: <PrivateRouter><ProductDetails/></PrivateRouter> 
      },     
       {
        path: "/add-product",
        element: <PrivateRouter><AddProduct/></PrivateRouter>
         },   
         {
        path: "/my-cart/:uid",
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/cart/${params.uid}`),
        element: <PrivateRouter> <Mycart/></PrivateRouter>
      }, 
      {
        path: "/update-product/:id",
         loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/product/singel/${params.id}`),
        element: <PrivateRouter><UpdateProduct/></PrivateRouter>
      },   
      {
        path: "/brand-preview/:id",
        loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/brand/${params.id}`),
        element: <PrivateRouter><BrandPreview/></PrivateRouter>
      },     
       {
        path: "/signup",
        element: <AuthHandler><Signup/></AuthHandler>
      },         
      {
        path: "/login",
        element: <AuthHandler><Login/></AuthHandler>
      }
    ],
  },
]);

export default CreateDRouter;

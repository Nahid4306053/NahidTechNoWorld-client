import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function TopratedProduct() {
  const [topProducts, settopProducts] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/product/top`).then(res=>{
      if(res.data.data){
        settopProducts(res.data.data)
      }
      else if(res.data.error){
        toast.error(res.data.error)
      }
    }) 
  }, []); 

  return (
    <div className="container mx-auto my-24">
      <h1 className="text-5xl font-bold">Top  Rated Product</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-14 gap-10">
      {topProducts.length > 0 && topProducts.map(ele=>{
        return (
          <ProductCard key={ele._id} product={ele} >
            <Link to={`/product-details/${ele._id}`}>
             <button className="btn  btn-neutral mt-1">
               <i className="fa-regular fa-eye"></i> View details
             </button>
           </Link>
          </ProductCard>
        )
       }) }
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function NewCollection() {
  const [newProducts, setNewProducts] = useState([]);
useEffect(() => {
  axios.get(`${import.meta.env.VITE_API_URL}/product/new`).then(res=>{
    if(res.data.data){
      setNewProducts(res.data.data)
    }
    else if(res.data.error){
      toast.error(res.data.error)
    }
  }) 
}, []); 

  return (
    <div className="container mx-auto my-20">
      <h1 className="text-5xl font-bold">New Collections</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-14 gap-10">
       {newProducts.length > 0 && newProducts.map(ele=>{
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

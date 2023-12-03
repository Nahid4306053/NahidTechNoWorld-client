import React, { useEffect, useState } from 'react'
import AdBanner from '../components/BrandPreview/AdBanner'
import { Link, useLoaderData } from 'react-router-dom'
import ProductCard from '../components/ProductCard';
import ScrollTop from '../Hooks/ScrollTop';
import "../styles/ImgFilter.scss"
import { useMood } from '../Context/TemplateMoodContext';
export default function BrandPreview() {
  ScrollTop()
  const {Darkmood} = useMood()
   const data = useLoaderData();
   const [brand,setbrand] = useState();
   const [products,setProducts] = useState([])
   useEffect(()=>{
     if(data.brand){
     setbrand(data.brand) 
      }     
      if(data.products){
        setProducts(data.products) 
      }
   },[data])

  return (
    <div>
       {brand &&
      <AdBanner ads={brand.brand_ads}></AdBanner>}
          <div className="container mx-auto my-10  lg:my-20">
      {brand && (
      <div className='flex justify-center'>
             <div className='grid gap-5 '>     
             <img className={`h-14 mx-auto rounded-lg ${Darkmood ? "dark-img" : "" } `} src={brand.brand_logo} alt="" />
           <h1 className="text-5xl font-bold text-center text-pink-400">{brand.brand_name}'s Product</h1></div>
      </div>)}
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-14 gap-10">
       {products.length > 0 ? products.map(ele=>{
        return ( 
          <ProductCard key={ele._id} product={ele} >
               <Link to={`/product-details/${ele._id}`}>
                 <button className="btn  btn-neutral mt-1">
                   <i className="fa-regular fa-eye"></i>details
                 </button>
               </Link>
               <Link to={`/update-product/${ele._id}`}>
            <button className="btn  btn-neutral mt-1">
            <i className="fa-solid fa-pen-to-square"></i> update
            </button>
          </Link>
          </ProductCard>
        )
       }) : <div className='mt-56 bg-base-300 col-span-4 text-center p-10 text-red-600  rounded-lg'><h1 className='text-5xl'>Not Found Any Product</h1></div> }
       {/* bg-sky-200 */}

      </div>
    </div>
    </div>
  )
}

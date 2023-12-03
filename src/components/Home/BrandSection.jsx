import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Brands.scss'
import axios from 'axios';
import { useMood } from '../../Context/TemplateMoodContext';
export default function BrandSection() {
  const [brands,setbrands] = useState([]);
  const {Darkmood} = useMood()
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/brands`).then(res=> setbrands(res.data)).catch(err=> console.log(err))
  },[])   
  return (
    <div className='container mx-auto my-20'>
      <h1 className="text-5xl font-bold">Top Brands</h1>
       <div className="grid gap-8 md:grid-cols-2 grid-cols-1 lg:grid-cols-4 mt-12">
        {brands.length > 0 && brands.map((ele)=>{
          return(
            <Link className={`cursor-pointer  ${Darkmood ? "brand brand-dark":"brand"} `} to={`/brand-preview/${ele._id}`}  key={ele._id}>
            <div className={`brendcard ${Darkmood ? "bg-base-300":"bg-sky-100"}   rounded-lg  h-48 flex flex-col justify-center items-center`}>
             <img className='h-20 rounded-lg' src={ele.brand_logo} alt="" />  
             <h1 className='text-2xl mt-5 capitalize'>{ele.brand_name}</h1>
            </div>
            </Link>
          )
        })}
       </div>
    </div>
  )
}

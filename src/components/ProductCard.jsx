import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "../styles/Card.scss";
import { useMood } from "../Context/TemplateMoodContext";

export default function ProductCard({product,children}) {
  const {Darkmood} = useMood()
         const {_id,image,name,type,brand,rating,description,price} = product || {}
  return (
    <div
      data-tilt
      data-tilt-glare
      data-tilt-max-glare="0.8"
      className={`card product_card mt-10 ${Darkmood ?"bg-base-300" :"bg-sky-100"} relative shadow-xl`}
    > 

    {/* img_container-dark */}
      <figure className={`w-[90%] relative ${Darkmood ?"img_container-dark" :"img_container"}  border  bg-white mt-[5%] mx-auto py-2 rounded-lg h-56`}>
        <img src={image} alt={name} className="rounded-xl   h-full" />
        <div className=" h-full  absolute flex justify-between w-full items-end  top-0">
          <div className="type bg-pink-400 p-2 py-1  text-xs text-white capitalize">
           {type}
          </div>
          <div className="brend bg-pink-400 p-2 py-1 text-xs text-white capitalize">
            {brand.name}
          </div>
        </div>
      </figure>
      <div className="card-body cursor-pointer relative items-center ">
        <div className="otherInfo absolute text-xl w-full flex justify-evenly">
          <div className="price text-pink-400 font-bold">Tk. {price}</div>
          <div className="price flex items-center gap-2">
            <Rating
              className="text-yellow-500"
              initialRating={rating}
              emptySymbol={<i className="fa-regular fa-star"></i>}
              fullSymbol={<i className="fa-solid fa-star"></i>}
              readonly
            />
            <span className="px-2  bg-pink-400 text-white  rounded-sm text-sm font-bold">
              {rating}
            </span>
          </div>
        </div>
        <h2 className="text-2xl text-center hover:text-pink-400 transition-all">
        <Link to={`/product-details/${_id}`}>{name.slice(0,23)+".."}</Link>
        
        </h2>
        <p className="text-lg mt-1 text-center">
         {description.slice(0,55)}
        </p>
        <div className="card-actions">
          {children}
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import React from "react";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthnicationContext";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import RelatedProduct from "../components/ProductDetails/RelatedProduct";
import { useMood } from "../Context/TemplateMoodContext";

export default function ProductDetails() {
  ScrollTop();
  const {Darkmood} = useMood()
  const { Cureentuser } = useAuth();
  // const uid = Cureentuser.uid;
  const product = useLoaderData();
  const addToCart = () => {
    const { _id: pid } = product;
    const body = { pid, uid: Cureentuser.uid };
    axios
      .post(`${import.meta.env.VITE_API_URL}/cart`, body, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials:true
      })
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("add to cart successfully");
        }
      });
  };
  return (
    product &&
    Object.keys(product).length > 0 && (
      <>
        <Pagetitle>{product.name} - TechNoWorld</Pagetitle>
        <div className="container mx-auto">
          <div className={`grid grid-cols-1 md:p-10 rounded-lg ${Darkmood ? 'bg-base-300' :"bg-sky-100"}  mt-40 md:gap-10 lg:grid-cols-2`}> {/*bg-sky-100 */}
            <div className="h-full w-full rounded-lg overflow-hidden bg-white">
              <div className=" h-full  max-h-full grid items-center  w-full overflow-hidden">
                <img className="w-full" src={product.image} alt={product.name} />
              </div>
            </div>
            <div className="details rounded-lg bg-white text-neutral p-7 md:p-14">
              <h1 className="product_tilte text-3xl">{product.name}</h1>
              <div className="other_info flex flex-wrap gap-5 mt-5">
                <div className="price text-2xl text-pink-400">
                  {" "}
                  TK.{product.price}{" "}
                </div>
                <div className="price flex items-center jb gap-2">
                  <Rating className="text-yellow-500" initialRating={product.rating} emptySymbol={<i className="fa-regular fa-star"></i>} fullSymbol={<i className="fa-solid fa-star"></i>} readonly />
                  <span className="px-2  bg-pink-400 text-white  rounded-sm text-sm font-bold">
                    {product.rating}
                  </span>
                </div>
              </div>
              <div className="info mt-5 grid gap-4">
                <h2 className="text-xl capitalize">
                  <strong className="text-pink-400 ">Type:</strong>{" "}
                  {product.type}
                </h2>
                <h2 className="text-xl">
                  <strong className="text-pink-400">Brand:</strong>{" "}
                  {product.brand.name}
                </h2>
                <h2 className="text-xl">
                  <strong className="text-pink-400">Product details:</strong>
                </h2>
                <p className="text-lg leading-8">{product.description}</p>
                <button onClick={addToCart} className="btn  btn-neutral mt-1">
                  <i className="fa-light fa-cart-shopping"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <RelatedProduct type={product.type} id={product._id}></RelatedProduct>
      </>
    )
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import { useMood } from "../Context/TemplateMoodContext";

export default function Mycart() {
  const {Darkmood} = useMood()
  ScrollTop();
  const cartProduct = useLoaderData();
  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    if (cartProduct) {
      setDisplayData(cartProduct);
    } else {
      setDisplayData([cartProduct]);
    }
  }, [cartProduct]);

  const removeitem = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/cart/${id}`,{withCredentials:true})
      .then((res) => {
        if (res.data.deletedCount === 1) {
          const remaining = displayData.filter((ele) => ele._id !== id);
          setDisplayData(remaining);
          toast.success("The item remove successfully");
        } else if (res.data.error) {
          toast.error(res.data.error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mx-auto mt-44">
      <Pagetitle>My cart - TechNoWorld</Pagetitle>
      {displayData && displayData.length > 0 ? (
         <div className={`overflow-x-auto ${Darkmood ? "bg-[#28313a]" :"bg-sky-200"} p-10 rounded-lg`}>
          {/* bg-sky-200 */}
          <table className="table">
            {/* head */}
            <thead className="text-xl">
              <tr>
                <th>Name</th> <th>Brand</th> <th>Price</th> <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((ele) => {
                const { product } = ele || {};
                return (
                  <tr key={ele._id} className="text-lg">
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask bg-white mask-squircle w-20 h-20">
                            <img
                              src={product[0].image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold ">
                            {product[0].name.slice(0, 25)}
                            <br />
                            {product[0].name.slice(25)}
                          </div>
                          <div className="text-sm opacity-50">
                            {product[0].type}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{product[0].brand.name}</td>
                    <td className="whitespace-nowrap">
                      Tk. {product[0].price}
                    </td>
                    <th className="grid lg:flex   lg:mt-5 gap-2 items-center">
                      <Link to={`/product-details/${ele.pid}`}>
                        <button
                          data-tip="View details"
                          className="btn-info ml-2  tooltip btn btn-sm"
                        >
                          <i className="fa-solid fa-eye"></i>
                        </button>
                      </Link>
                      <Link to={`/update-product/${ele.pid}`}>
                        <button
                          data-tip="Update Details"
                          className="btn-secondary ml-2 tooltip btn btn-sm"
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      </Link>
                      <a>
                        <button
                          onClick={() => removeitem(ele._id)}
                          data-tip="Remove from Cart"
                          className="btn-error ml-2 tooltip btn btn-sm"
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </a>
                    </th>
                  </tr>
                );
              })}
            </tbody>
            {/* foot */}
          </table>
        </div>
      ) : (
        <div className="container py-20 px-5 bg-base-300 rounded-lg">
          {/* bg-sky-200  */}
          <h1 className="text-pink-400 text-4xl text-center">
            There is no product in your cart
          </h1>
        </div>
      )}
    </div>
  );
}

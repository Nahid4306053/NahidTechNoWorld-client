import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import axios from "axios";
import { toast } from "react-toastify";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import { useMood } from "../Context/TemplateMoodContext";
export default function AddProduct() {
  ScrollTop()
  const [brand, setbrand] = useState();
  const [brands, setbrands] = useState([]);
  const [error, setError] = useState([]);
  const {Darkmood} = useMood()
  useEffect(() => {
  
    axios
      .get(`${import.meta.env.VITE_API_URL}/brands`)
      .then((res) => setbrands(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handelPrductInfo = (from) => {
    from.preventDefault();

    const image = from.target.image.value.trim();
    const name = from.target.name.value.trim();
    const type = from.target.type.value.trim();
    const price = parseFloat(from.target.price.value.trim());
    const rating = parseFloat(from.target.rating.value.trim());
    const description = from.target.description.value.trim();

    let err = [];

    if (isNaN(price) || isNaN(rating) === NaN) {
      err.push("Price and rating should be a number");
    } else if (rating < 0 || rating > 5) {
      err.push("Rating should between 1 to 5");
    }

    if (!brand) {
      err.push("Please select a barnd");
    }
     
    setError(err);

    if (err.length === 0) {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/product`,
          { image, name, type, brand:JSON.parse(brand), rating, description, price },
          {
            headers: {
              "Content-Type": "Application/json",
            },
            withCredentials:true
          }
        )
        .then((res) => {
          if (res.data.insertedId) {
            from.target.reset()        
            toast.success("Product add succcessfully");
          } else {
            toast.success(res.data.error);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={`container mx-auto mt-48 text-center ${Darkmood ? "bg-base-300" : "bg-sky-100"}  rounded-lg`}>
      <div className="  p-10"> 
      {/* bg-sky-100 */}
      <Pagetitle>Add Product - TechNoWorld</Pagetitle>
        <h1 className="text-4xl font-bold ">Add product</h1>
        <form
          onSubmit={handelPrductInfo}
          method="post"
          className="lg:grid  lg:grid-cols-2 flex flex-col gap-4  lg:p-10"
        >
          <Input
            label="Image url"
            type="text"
            placeholder="Image url"
            customcss="focus:outline-none"
            name="image"
          ></Input>
          <Input
            label="Product Name"
            type="text"
            placeholder="Product Name"
            customcss="focus:outline-none"
            name="name"
          ></Input>
          <Input
            label="Product type"
            type="text"
            placeholder="Product type"
            customcss="focus:outline-none"
            name="type"
          ></Input>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Select a Product brand</span>
            </label>
            {brands.length > 0 && (
              <select
                onChange={(e) => setbrand(e.target.value)}
                name="brand"
                className="select select-bordered text-base text-gray-400 w-full"
                required
              >
                <option defaultValue="" >Select a Product brand</option>
                {brands.map((ele) => {
                  return (
                    <option
                      value={JSON.stringify({
                        id: ele._id,
                        name: ele.brand_name,
                      })}
                      key={ele._id}
                    >
                      {ele.brand_name}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
          <Input
            label="Product Price"
            type="text"
            placeholder="Product Price"
            customcss="focus:outline-none"
            name="price"
          ></Input>
          <Input
            label="Product Rating"
            type="text"
            placeholder="Product rating"
            customcss="focus:outline-none"
            name="rating"
          ></Input>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text text-xl">Product Description</span>
            </label>
            <textarea
              className="textarea text-lg focus:outline-none textarea-bordered"
              placeholder="Description "
              rows="4"
              name="description"
            ></textarea>
          </div>
          {error.length > 0 && (
            <div className="col-span-2">
              <div className="erros text-red-600 bg-red-300 mt-5  max-w-lg mx-auto p-2 rounded-lg ">
                {" "}
                <ul>
                  {" "}
                  {error.map((ele, ind) => (
                    <li key={ind}>{ele}</li>
                  ))}{" "}
                </ul>{" "}
              </div>
            </div>
          )}

          <button type="submit" className="btn  btn-neutral mt-5 col-span-2">
            {" "}
            Add Product{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

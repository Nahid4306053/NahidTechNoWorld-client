import React, { useEffect, useRef, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { ThreeCircles } from "react-loader-spinner";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import "../styles/App.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopHeader from "../components/TopHeader";
import ScrollTop from "../Hooks/ScrollTop";
import { getmood, setmood } from "../Utils/Controllmodd";
import { useMood } from "../Context/TemplateMoodContext";

export default function MainLayouts() {
  const [showController,setController] = useState(false);
  const navigation = useNavigation();
  const moodtoggler = useRef();
  const {Darkmood,setDarkmood} = useMood()
  const handeldarkmood = () =>{
    if(moodtoggler.current.checked){
      setmood("dark")
      setDarkmood(true)
    }
    else{
      setmood("light")
      setDarkmood(false)
    }
  }
  useEffect(() => {
    Aos.init();
    const mood = getmood()
   if(mood){
    if(mood === "light"){
      moodtoggler.current.checked = false;
    }
    else{
      moodtoggler.current.checked = true;
    }
   }
  }, []);

  return (
    <div className="overflow-x-auto min-h-screen  flex flex-col justify-between">
      <TopHeader/>
      <Navber />
      <div className={`${showController ? "translate-x-6" : "translate-x-16"} transition-all shadow-xl duration-300 z-50  template-controler uppercase text-sm  py-6 px-2 rounded-l-lg right-0 flex items-center fixed  ${Darkmood ? "bg-base-300" :"bg-sky-200"}  top-1/2`}>  
    <div onClick={()=> setController(!showController)} className="items-center flex cursor-pointer"> 
       <div>
        <i class={` fa-solid fa-angles-left fa-fade ${showController && "fa-rotate-180"}`}></i> 
        </div>
        <div className="mood  font-bold 2">
         {Darkmood ? "light" :"dark"} mood
        </div></div>
        <div>
        <input onClick={handeldarkmood} ref={moodtoggler} type="checkbox" className=" toggle h-5 w-20 -ml-4 mt-2  rotate-90"  />
        </div>
      </div>
      <div>
        <ToastContainer
          className="mt-24"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      {navigation.state === "loading" ? (
        <div className=" flex justify-center min-h-screen items-center  w-full">
          <ScrollTop></ScrollTop>
          <ThreeCircles
            height="200"
            width="200"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperclassName=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#3498db"
            innerCircleColor="#e67e22"
            middleCircleColor="#e74c3c"
          />
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer />
    </div>
  );
}

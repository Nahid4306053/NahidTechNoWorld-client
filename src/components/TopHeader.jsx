import React from "react";
import { useMood } from "../Context/TemplateMoodContext";

export default function TopHeader() {
  const {Darkmood} = useMood()
  return (
    <div className={`w-full fixed top-0 text-xs md:text-base z-50 text-white ${Darkmood ? "bg-[#0f1318]" :"bg-pink-400"} `}>
    {/* bg-pink-400 */}
      <div className="container mx-auto md:py-2">
        <div className="md:flex-row gap-2 py-2 flex-col items-center flex  text-center justify-between">
          <div className="contactinfo flex gap-5 cursor-pointer">
            <span>
              <i className="fa-sharp fa-regular fa-location-dot"></i> Our
              Colletion Points
            </span>
            <span>
              <i className="fa-light fa-truck fa-flip-horizontal"></i> Track
              Your parcel
            </span>
          </div>
          <div className="contactinfo flex gap-5 cursor-pointer">
            <span>Currency (BD)</span>
            <span>Help</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function SupportSection() {
  return (
    <div className="my-10 mt-20 grid lg:grid-cols-4 gap-10 md:grid-cols-2 grid-cols-1 container mx-auto">
      <div className="media flex gap-5 mt-10 items-center mx-auto lg:m-0">
        <div className="icon text-5xl text-pink-400">
          <i className="fa-thin fa-paper-plane"></i>
        </div>    
        <div className="media_desc">
          <h2 className="text-2xl">Mail Support</h2>
          <p>ku4306053@gmail.com</p>
        </div>
      </div>
      <div className="media flex gap-5 mt-10 items-center mx-auto lg:m-0">
        <div className="icon text-5xl text-pink-400">
          <i className="fa-thin fa-headset"></i>
        </div>
        <div className="media_desc">
          <h2 className="text-2xl">Customer Care</h2>
          <p className="whitespace-break-spaces">24/7 Customer care</p>
        </div>
      </div>
      <div className="media flex gap-5 mt-10 items-center mx-auto lg:m-0">
        <div className="icon text-5xl text-pink-400">
          <i className="fa-light fa-people-group"></i>
        </div>
        <div className="media_desc">
          <h2 className="text-2xl">Membership</h2>
          <p className="break-words">Membership opportunity </p>
        </div>
      </div>
      <div className="media flex gap-5 mt-10 items-center mx-auto lg:m-0">
        <div className="icon text-5xl text-pink-400">
          <i className="fa-thin fa-tty"></i>
        </div>
        <div className="media_desc">
          <h2 className="text-2xl">Tel us</h2>
          <p className="whitespace-break-spaces">+(880)-2-7-7777-7777</p>
        </div>
      </div>
    </div>
  );
}

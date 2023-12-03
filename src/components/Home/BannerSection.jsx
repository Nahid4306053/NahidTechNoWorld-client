import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/Banner.scss'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';  
export default function BannerSection() { 
  return (
    <div className="lg:container mx-auto grid-cols-12 grid mt-32 lg:mt-[150px] lg:h-[650px]">
      <div className="adSection order-1 lg:order-0 col-span-full flex  lg:flex-col  h-full lg:col-span-3">
        <div className="add_1 advertisment w-3/6 lg:w-full lg:h-3/6">
        <a href="#">  <img className="h-full w-full " src="https://i.ibb.co/VpzG8px/add-1.png" alt="" /></a>
        <div className="over p-7"><div className=""> </div></div> </div>  
        <div className="add_1 advertisment w-3/6 lg:w-full lg:h-3/6 bg-black overflow-hidden">
       <a href="#"> <img className="h-full w-full" src="https://i.ibb.co/t4DPZ2k/add-2.jpg" alt="" /></a>
       <div className="over p-7">
        <div className="sub_con"> </div></div> 
        </div>

      </div>


      <div className="bg-black slider_Section col-span-full order-0 lg:order-1   lg:col-span-9" >  
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  mx-auto overflow-hidden max-h-[650px] w-full h-full"
      >  
       <SwiperSlide><a href="#"><img src="https://i.ibb.co/kcwx4HP/slidar-add2.webp" className="w-full h-full" alt="" /></a></SwiperSlide>
       <SwiperSlide><a href="#"><img src="https://i.ibb.co/dLBLvm0/slidar-add.jpg" className="w-full h-full" alt="" /></a></SwiperSlide>
       <SwiperSlide><a href="#"><img src="https://i.ibb.co/YDghWX9/slidar-add1.png" className="w-full h-full" alt="" /></a></SwiperSlide>
       <SwiperSlide><a href="#"><img src="https://i.ibb.co/RHDWCtS/slidar-add3.webp" className="w-full h-full" alt="" /></a></SwiperSlide>
       <SwiperSlide><a href="#"><img src="https://i.ibb.co/KhYB6CN/slidar-add4.webp" className="w-full h-full" alt="" /></a></SwiperSlide>      
        <SwiperSlide><a href="#"><img src="https://i.ibb.co/yYCqQYt/slidar-add5.jpg" className="w-full h-full" alt="" /></a></SwiperSlide>
   </Swiper>
       
      </div>
   
    </div>
  );
}
  
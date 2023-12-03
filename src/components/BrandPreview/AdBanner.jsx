import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/Banner.scss'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';  
export default function AdBanner({ads}) { 
  return (

      <div className=" slider_Section lg:mt-[150px] mt-32 h-[300px] md:h-[500px] lg:h-[700px]" >  
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
        className="mySwiper  mx-auto overflow-hidden h-[300px] md:h-[500px] lg:h-[700px]  w-full "
      >  
      
      {ads && ads.length > 0 && ads.map((ele,ind)=>{
        return (
          <SwiperSlide key={ind}><img className="w-full h-full" src={ele} alt="" /></SwiperSlide>
        )
      })     }
       </Swiper>
       
      </div>
   
    
  );
}
  
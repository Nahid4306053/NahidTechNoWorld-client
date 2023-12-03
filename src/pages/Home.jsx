import React from 'react'
import BannerSection from '../components/Home/BannerSection'
import BrandSection from '../components/Home/BrandSection'
import NewCollection from '../components/Home/NewCollection'
import TopratedProduct from '../components/Home/TopratedProduct'
import banner_full_w_1 from '/images/banner_full_w_1.png';
import appleBanner from '/images/appleBanner.png'
import banner_deal_hot_1 from '/images/banner_deal_hot_1-min.png'
import banner_v2 from '/images/banner_v2.png'
import SupportSection from '../components/Home/SupportSection'
import Pagetitle from '../Hooks/Pagetitle'
import ScrollTop from '../Hooks/ScrollTop'
export default function Home() {
  ScrollTop()
  return (
    <>   <Pagetitle>Home - TechNoWorld</Pagetitle>   
      <div>
      <BannerSection></BannerSection>
      <BrandSection></BrandSection>
       <a href="/"><div className='banner overflow-hidden advertisment  container mx-auto'>
        <div className="over "><div className="sub_con_2"></div> </div>
        <img className='w-full h-full' src={banner_full_w_1} alt="" /></div></a>
      <NewCollection></NewCollection>      
       <a href="/"><div className='banner overflow-hidden advertisment  container mx-auto'>
        <div className="over "><div className="sub_con_2"></div> </div>
        <img className='w-full h-full overlay ' src={appleBanner} alt="" /></div></a>
      <TopratedProduct></TopratedProduct>
      <div className="container mx-auto grid md:grid-cols-2 gap-20 md:gap-10 lg:gap-20 grid-cols-1">
      <a href="/"><div className='banner rounded-lg overflow-hidden advertisment  container mx-auto'>
        <div className="over p-10"><div className="sub_con"></div> </div>
        <img className='w-full h-full overlay ' src={banner_deal_hot_1} alt="" /></div></a>      
        <a href="/"><div className='banner rounded-lg overflow-hidden advertisment  container mx-auto'>
        <div className="over p-10"><div className="sub_con"></div> </div>
        <img className='w-full h-full overlay ' src={banner_v2} alt="" /></div></a>
      </div>
      </div> 

     <SupportSection></SupportSection>
    </>



  )
}

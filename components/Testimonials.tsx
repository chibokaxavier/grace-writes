import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

type Props = {};

const Testimonials = (props: Props) => {
    const [swiper, setSwiper] = useState(null);
    
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left  md:flex-row max-w-7xl justify-evenly items-center mx-auto px-10">
      <h4 className=" animate-pulse absolute top-24 uppercase tracking-[15px] text-2xl text-gray-500 md:pl-0 pl-4">
        as trusted by
      </h4>

      
      <Swiper
        modules={[Autoplay,Pagination]}
        pagination={{ clickable: true, dynamicBullets:true }}
       
        spaceBetween={100}
        slidesPerView={1}
        autoplay={{delay:1000}}
        className="max-w-full"
      >
        <SwiperSlide>
          <div className=" h-[300px] w-[400px] flex flex-col justify-center items-center mx-auto pb-6" >
            <img src="/images/medium.png" className="h-full w-full object-contain object-center" />
          </div>
          <p className="text-lg flex justify-center items-center text-gray-200 uppercase tracking-widest mb-10"> Medium.com</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[300px] w-[300px] flex flex-col mx-auto  pb-6">
            <img src="/images/crypto.jpg" className="h-full w-full object-contain object-center" />
            
          </div>
          <p className="text-lg flex justify-center items-center text-gray-200 uppercase tracking-widest"> Crypto Trend Rider</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[300px] w-[300px] flex flex-col  mx-auto pb-6">
            <img src="/images/market.png" className="h-full w-full object-contain object-center" />
           
            </div>
            <p className="text-lg mx-auto flex justify-center items-center text-gray-200 uppercase tracking-widest"> The Marketing Transformers</p>
       
        </SwiperSlide>

        
      </Swiper>
      </div>

     

    
  );
};

export default Testimonials;

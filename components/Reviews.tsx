import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left  md:flex-row max-w-7xl justify-evenly items-center mx-auto px-10 space-y-10">
      <h4 className=" animate-pulse absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500 md:pl-0 pl-4 ">
        Reviews
      </h4>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={100}
        slidesPerView={1}
        autoplay={{ delay: 7000 }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="max-w-full"
      >
        <SwiperSlide>
          <div className=" flex flex-col md:flex md:flex-row w-full md:h-[400px] h-fit justify-content items-center ">
            <div className=" md:bg-[black]/10 w-[50%] h-[200px] md:h-full flex items-center justify-center pt-4 md:pt-0">
              <img
                src="/images/boss.jpg"
                className=" w-[180px] h-[180px] rounded-full md:rounded-none md:w-[300px] md:h-[350px] md:rounded-t-[60px] md:rounded-b-[60px] md:mt-0 mt-10"
              />
            </div>
            <div className="  md:w-[50%] h-full flex  flex-col items-left text-left justify-center text-sm   border-gray-400 px-4 pt-16 md:px-10 ">
              {" "}
              <p className="md:max-w-full text-sm  md:text-[20px]  ">
                I am truly proud to work alongside her. She is not only
                passionate and hardworking but displays a type of resilience
                very few possess. During our time together, Grace proved to be
                bright, inquisitive, and diligent in her work. Her collaboration
                skills are truly impressive, and her copywriting skills are
                highly praise-worthy. Her ability to work with others is
                especially outstanding, her fearless approach to work is what
                allows her to stand out from others. She applies her abilities
                with great intelligence and grace.
              </p>
              <p className=" pt-4 md:pt-10">Komal Eijaz. </p>
              <p>Head of copy </p>
              <p>The Marketing Transformers</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col md:flex md:flex-row w-full md:h-[400px] h-fit justify-content items-center ">
            <div className=" md:bg-[black]/10 w-[50%] h-[200px] md:h-full flex items-center justify-center pt-4 md:pt-0">
              <img
                src="/images/ibiza.jpg"
                className=" w-[180px] h-[180px] rounded-full md:rounded-none md:w-[300px] md:h-[350px] md:rounded-t-[60px] md:rounded-b-[60px] md:mt-0 mt-10"
              />
            </div>
            <div className="  md:w-[50%] h-full flex  flex-col items-left text-left justify-center text-sm   border-gray-400 px-4 pt-16  md:px-10">
              {" "}
              <p className="md:max-w-full text-sm  md:text-[20px] ">
                Grace is a very experienced Copywriter who has consistently
                demonstrated his ability to create and execute successful ad
                campaigns. Her deep understanding, creativity, and attention to
                detail, has resulted in impressive results for our marketing
                team and our clients. She is a proactive problem solver, always
                looking for ways to improve campaign performance, and is not
                afraid to test and try new writing strategies. She also works
                closely with the rest of the team so that feedback and
                suggestions are immediately taken into account.
              </p>
              <p className=" pt-4 md:pt-10">Ibiza T </p>
              <p>Marketing Director</p>
              <p>The Marketing Transformers</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col md:flex md:flex-row w-full md:h-[400px] h-fit justify-content items-center ">
            <div className=" md:bg-[black]/10 w-[50%] h-[200px] md:h-full flex items-center justify-center pt-4 md:pt-0">
              <img
                src="/images/crypto.jpg"
                className=" w-[180px] h-[180px] rounded-full md:rounded-none md:w-[300px] md:h-[350px] md:rounded-t-[60px] md:rounded-b-[60px] md:mt-0 mt-10"
              />
            </div>
            <div className="  md:w-[50%] h-full flex  flex-col items-left text-left justify-center text-sm   border-gray-400 px-4 pt-16 md:px-10 ">
              {" "}
              <p className="md:max-w-full text-lg  md:text-[20px] ">
              Our user enagagements increased! Thanks to Grace blog posts.
              </p>
              <p className=" pt-4 md:pt-10">Director of Marketing </p>
              <p>Crypto Trend Rider </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left  md:flex-row max-w-7xl md:justify-evenly items-center mx-auto px-8">
      <h2 className="absolute top-20 uppercase tracking-[20px] text-2xl text-gray-500 md:pl-0 pl-4">
        About
      </h2>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src="./images/zhye.jpg"
        className="  md:mb-0 mt-[140px] md:mt-0   flex-shrink-0 w-[170px] h-[170px] rounded-full object-cover md:rounded-lg md:h-96 md:w-64 xl:w-[400px] xl:h-[450px]"
      />
      <div className=" px-0 md:px-10 md:pt-0 ">
        {/* <h4 className=" text-2xl md:text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[orange]">little</span>{" "}
          Background
        </h4> */}
        <p className="text-base font-semibold md:text-lg mt-6">
          {" "}
          Grace Uche-Odii Ezinne is a freelance copy/content writer with
          experience in helping cryptocurrency/blockchain and web3 brands create
          copy/content that engages their users and grows their audience. Grace
          is a top writer of the Marketing Transformers and a crypto enthusiast.
          She enjoys and spends her time creating content about updates and
          guides in the blockchain space. Want a fresh and consistent flow of
          content and blog post ideas for your blockchain brand? ​ Ready to work
          with me on creating your crypto content? Tap <a href="mailto:grace.ezinne.writes@gmail.com" className="underline decoration-[#f7ab0a] text-[#f7ab0a]">Here</a> to get started.
        </p>
      </div>
    </div>
  );
};

export default About;

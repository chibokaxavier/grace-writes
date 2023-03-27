import Link from "next/link";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left  md:flex-row max-w-7xl justify-evenly items-center mx-auto px-10">
      <h2 className=" animate-pulse absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500 md:pl-0 pl-4">
        Services
      </h2>

      <div className=" flex flex-col items-center justify-center text-sm md:text-lg text-gray-300  space-y-6 md:space-y-6 md:mt-[200px] mt-[100px] ">
        <p>
          Consistent content is the best way to market your
          Cryptocurrency/Blockchain brands and Web3 communities to show your
          audience/users what you offer.
        </p>
        <p>
          Do you have problems creating a consistent flow of content and blog
          post ideas/topics?
        </p>

        <p>
          Do you want SEO-optimised blog posts that provide great value for your
          users and target audience?
        </p>

        <p>
          Do you want Newsletters and social media content that keeps your users
          engaged and updated about your brand? I can help.
        </p>

        <p>
          I will thoroughly research to create, edit, and proofread each
          content/copy and provide insightful information for your
          users/audience.
        </p>
        <p>
          You will get content/copy that is persuasive, informative and gives your
          audience value.
        </p>
        <a href="https://medium.com/@gracewilsoncopywriter">
          <button className=" animate-pulse  hover:bg-gray-500 transition  duration-300 hover:text-white bg-[#f7ab0a] py-3 px-2 rounded-md font-bold text-black text-lg uppercase">
            {" "}
            check out my blog
          </button>
        </a>
      </div>
    </div>
  );
};

export default Services;

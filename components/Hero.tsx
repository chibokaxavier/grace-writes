import Link from "next/link";
import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
 import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, setText] = useTypewriter({
    words: [
      "Expert Cryptocurrency/Blockchain and Web3 writer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="z-20">
        <h1 className="text-3xl lg:text-6xl font-semibold px-10 pb-4">
          <span className="mr-3"> {text}</span>
          <Cursor cursorColor="white" />
        </h1>
        <h2 className="tracking-[10px] md:tracking-[10px] text-sm pb-2 uppercase text-gray-500">
        Get new leads, grow, and engage your audience through precise copy/content
        </h2>
        <div className="pt-5">
          <Link href="#about">
            {" "}
            <button className="heroButton">About</button>
          </Link>
        
          <Link href="#services">
            {" "}
            <button className="heroButton">Services</button>
          </Link>
          <Link href="#reviews">
            {" "}
            <button className="heroButton">Reviews</button>
          </Link>
          <Link href="#contactme">
            {" "}
            <button className="heroButton">Contact Me</button>
          </Link>
          <Link href="https://medium.com/@gracewilsoncopywriter" target="_blank">
            {" "}
            <button className="heroButton">Blog </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

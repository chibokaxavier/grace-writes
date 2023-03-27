import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-start sticky top-0 p-5 mx-auto max-w-7xl justify-between z-20 xl;items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex  items-center flex-row  text-gray-500 uppercase font-semibold  text-lg md:text-xl pt-2"
      >
        <p>Grace Uche-Odii Ezinne </p>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center cursor-pointer  text-gray-300"
      >
        <SocialIcon
          url="https://instagram.com/writer_grace_ezinne?igshid=YmMyMTA2M2Y="
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/grace-uche-odii-ezinne%E2%9C%A8-897221267"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100078536050565&mibextid=LQQJ4d"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/zhye_d_writer?s=21&t=dSVCbzSSv-YnBDXTm3dqRg"
          fgColor="gray"
          bgColor="transparent"
        />

        <a href="#contactme" target="_blank" className="flex">
          {" "}
          <EnvelopeIcon className="cursor-pointer text-[gray] h-7 w-7 mx-4" />
          <p className="uppercase hidden   md:inline-flex text-gray-400 text-[14px]">
            Get In touch
          </p>{" "}
        </a>
      </motion.div>
    </header>
  );
};

export default Header;

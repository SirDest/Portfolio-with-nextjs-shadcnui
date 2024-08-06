import { generateClassName } from "@/app/components/utils/tailwind";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { HiOutlineMail } from "react-icons/hi";

const iconStyles = [
  "flex",
  "justify-center",
  "items-center",
  "p-2",
  "w-full",
  "rounded",
  "ease-in-out",
  "duration-300",
  "hover:bg-opacity-85",
];

const Socials = () => {
  return (
    <div className='flex gap-6 items-center mb-2 xl:mb-0'>
      <Link
        href='/'
        className={`${generateClassName(iconStyles)} bg-gray-100 text-gray-800`}
      >
        <FaGithub size={25} />
      </Link>
      <Link
        href='/'
        className={`${generateClassName(iconStyles)} bg-blue-600 text-white`}
      >
        <FaLinkedinIn size={25} />
      </Link>
      <Link
        href='/'
        className={`${generateClassName(iconStyles)} bg-gray-300 text-red-500`}
      >
        <HiOutlineMail size={25} />
      </Link>
      <Link
        href='/'
        className={`${generateClassName(iconStyles)} text-white bg-black`}
      >
        <FaXTwitter size={25} />
      </Link>
    </div>
  );
};

export default Socials;

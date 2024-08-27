"use client";
import React from "react";
import { generateClassName } from "@/app/utils/tailwind";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { HiOutlineMail } from "react-icons/hi";
import { handleOpenInNewTab } from "@/app/utils/openInNewTab";

const iconStyles = [
  "flex",
  "justify-center",
  "items-center",
  "p-2",
  "w-fit",
  "rounded",
  "ease-in-out",
  "duration-300",
  "hover:bg-opacity-85",
];

const Socials = () => {
  const githubLink = "https://github.com/sirdest";
  const linkedinLink = "https://www.linkedin.com/in/destined-akinro";

  return (
    <div className='flex gap-6 items-center mb-4 xl:mb-0'>
      <button
        onClick={() => handleOpenInNewTab(githubLink)}
        className={`${generateClassName(iconStyles)} bg-gray-100 text-gray-800`}
      >
        <FaGithub size={25} />
      </button>
      <button
        onClick={() => handleOpenInNewTab(linkedinLink)}
        className={`${generateClassName(iconStyles)} bg-blue-600 text-white`}
      >
        <FaLinkedinIn size={25} />
      </button>
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

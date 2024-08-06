"use client";
import React from "react";
import profile from "@/static/images/photo.png";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className='w-full h-full relative '>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className='w-[230px] h-[230px] xl:w-[498px] xl:h-[498px] mix-blend-lighten rounded-[50%] '
        >
          <Image
            className='rounded-[50%]'
            src={profile}
            priority
            quality={100}
            fill
            alt=''
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;

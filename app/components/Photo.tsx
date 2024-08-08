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
        {/* image */}
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

        {/* circle */}
        <motion.svg
          className='w-[230px] h-[230px] xl:w-[498px] xl:h-[498px] '
          fill='transperent'
          viewBox='0,0 506 506'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='253'
            r='250'
            cy='253'
            stroke='#00ff99'
            strokeWidth='4'
            strokeLinejoin='round'
            strokeLinecap='round'
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;

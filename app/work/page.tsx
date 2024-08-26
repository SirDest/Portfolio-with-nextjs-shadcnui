"use client";
import React, { useState } from "react";
import ecommerceimg from "@/static/images/projects/ecommercesample.jpg";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperClass } from "swiper/types";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtns from "../components/Transitions/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "eCommerce Website",
    description:
      "A basic eCommerce website built with React and TypeScript, featuring product listings and basic shopping cart functionality",
    stack: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
    ],
    image: ecommerceimg,
    live: "https://destined-ecommerce-site.vercel.app/",
    github: "https://github.com/SirDest/simple-e-commerce-site",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Personal Portfolio",
    description:
      "This repository hosts my personal portfolio, showcasing my frontend development skills. It also reflects my expertise in building responsive web applications with modern technologies.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: ecommerceimg,
    live: "https://destined-ecommerce-site.vercel.app/",
    github: "https://github.com/SirDest/Portfolio-Website",
  },
  // {
  //   num: "03",
  //   category: "frontend",
  //   title: "eCommerce Website",
  //   description:
  //     "A basic eCommerce website built with React and TypeScript, featuring product listings and basic shopping cart functionality",
  //   stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "Javascript" }],
  //   image: ecommerceimg,
  //   live: "https://destined-ecommerce-site.vercel.app/",
  //   github: "https://github.com/SirDest/simple-e-commerce-site",
  // },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none '>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.title}
              </h2>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map(({ name }, index) => (
                  <li key={index} className='text-xl text-accent'>
                    {name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live} legacyBehavior>
                  <a target='_blank' rel='noopener noreferrer'>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                </Link>
                <Link href={project.github} legacyBehavior>
                  <a target='_blank' rel='noopener noreferrer'>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsGithub className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map(
                (
                  {
                    num,
                    category,
                    title,
                    description,
                    github,
                    image,
                    live,
                    stack,
                  },
                  index
                ) => (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      <div>
                        <Image
                          src={image}
                          fill
                          className='object-cover'
                          alt=''
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

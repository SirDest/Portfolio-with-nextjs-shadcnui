import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  FaHtml5,
  FaJs,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiRedux,
  SiTypescript,
  SiMui,
} from "react-icons/si";
import { frame } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const skills = {
  icon: "",
  title: "My Skills",
  description:
    "My journey as a frontend developer has equipped me with a solid command of essential frameworks and tools. From building responsive interfaces to optimizing performance, I`ve honed my skills through continuous practice and real-world projects. I’m always eager to explore new technologies and expand my expertise in the ever-evolving world of web development.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      framework: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      framework: "CSS 3",
    },
    {
      icon: <FaJs />,
      framework: "JAVASCRIPT",
    },
    {
      icon: <FaReact />,
      framework: "REACT JS",
    },
    {
      icon: <SiNextdotjs />,
      framework: "NEXT JS",
    },
    {
      icon: <SiTypescript />,
      framework: "TYPESCRIPT",
    },
    {
      icon: <FaNodeJs />,
      framework: "NODE JS",
    },
    {
      icon: <SiRedux />,
      framework: "REDUX TOOLKIT",
    },
    {
      icon: <SiGit />,
      framework: "GIT",
    },
    {
      icon: <SiTailwindcss />,
      framework: "TAILWIND CSS",
    },
    {
      icon: <FaBootstrap />,
      framework: "BOOTSTRAP",
    },
    {
      icon: <SiMui />,
      framework: "MATERIAL UI",
    },
  ],
};

const Skills = () => {
  return (
    <div className='flex flex-col gap-[30px] '>
      <div className='flex flex-col gap-[30px] text-center xl:text-left'>
        <h3 className='text-4xl font-bold'>{skills.title}</h3>
        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
          {skills.description}
        </p>
      </div>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
        {skills.skillsList.map(({ icon, framework }, i) => (
          <li key={i}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                  <div className='text-6xl group-hover:text-[#97BC62] transition-all duration-300'>
                    {icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{framework}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

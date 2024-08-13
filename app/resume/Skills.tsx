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
    <div className='flex flex-col gap-[30px] text-center xl:text-left '>
      <h3 className='text-4xl font-bold'>{skills.title}</h3>
      <p className='max-w-[600px] text-white'>{skills.description}</p>
      <ScrollArea className='h-[480px]'>
        <ul className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
          {skills.skillsList.map(({ icon, framework }, i) => {
            return (
              <li
                key={i}
                className='flex gap-2 justify-center place-content-center items-center bg-[#232329] text-base h-[55px] w-[180px] rounded-md'
              >
                {icon} {framework}
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Skills;

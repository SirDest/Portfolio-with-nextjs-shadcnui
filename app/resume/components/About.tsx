import React from "react";
import { aboutMe } from "./utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const About = () => {
  return (
    <div className='flex flex-col gap-[30px]'>
      <h3 className='text-4xl font-bold'>{aboutMe.title}</h3>
      <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
        {aboutMe.description}
      </p>
      <ScrollArea className='h-[480px]'>
        <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-3 mx-auto xl:mx-0'>
          {aboutMe.info.map(({ fieldname, fieldValue }, i) => (
            <li
              key={i}
              className='flex items-center justify-center xl:justify-start gap-2'
            >
              <span className='text-white/60 '>{fieldname}:</span>
              <span className='text-xl'>{fieldValue}</span>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default About;

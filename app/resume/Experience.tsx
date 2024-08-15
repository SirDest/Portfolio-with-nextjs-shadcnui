import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { experience } from "./utils";

const Experience = () => {
  return (
    <div className='flex flex-col gap-[30px] text-center xl:text-left '>
      <h3 className='text-4xl font-bold'>{experience.title}</h3>
      <p>{experience.description}</p>
      <ScrollArea className='h-[480px]'>
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
          {experience.companies.map(({ company, position, duration }, i) => {
            return (
              <li
                key={i}
                className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
              >
                <span className='text-[#97BC62]'>{duration}</span>
                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                  {position}
                </h3>
                <div className='flex items-center gap-3'>
                  <span className='w-[6px] h-[6px] rounded-full bg-[#97BC62]'></span>
                  <p className='text-white/60'>{company}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Experience;

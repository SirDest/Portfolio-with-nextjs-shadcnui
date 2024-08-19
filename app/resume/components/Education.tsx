import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { education } from "./utils";

const Education = () => {
  return (
    <div className='flex flex-col gap-[30px] text-center xl:text-left '>
      <h3 className='text-4xl font-bold'>{education.title}</h3>
      <p className='text-white/60'>{education.description}</p>
      <ScrollArea className='h-[480px]'>
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
          {education.history.map(({ institution, degree, duration }, i) => {
            return (
              <li
                key={i}
                className='bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1'
              >
                <span className='text-[#97BC62]'>{duration}</span>
                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                  {degree}
                </h3>
                <p className='text-white/60'>{institution}</p>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Education;

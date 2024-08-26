import React from "react";

import Socials from "./Socials";
import Photo from "./Photo";
import DownloadResumeButton from "./DownloadResume";

const Landing = () => {
  return (
    <div className='container mx-auto h-full'>
      <div className='flex flex-col xl:flex-row items-center justify-between'>
        <div className='order-2 xl:order-none text-center xl:text-left'>
          <span>FrontEnd Developer</span>
          <h1 className='h1 text-xl'>Hello I`m</h1>
          <h1 className='h1 text-accent'>Akinro Destined</h1>
          <p className='max-w-[500px] mb-9 text-white/80'>
            I excel at crafting elegant digital experiences and I am proficient
            in various programming language and technologies.
          </p>
          <div className='flex flex-col xl:flex-row items-center gap-8'>
            <DownloadResumeButton />
            <div className='flex items-center'>
              <Socials />
            </div>
          </div>
        </div>
        <div className='order-1 xl:order-none mt-8 xl:mt-0 mb-8 xl:mb-0'>
          <Photo />
        </div>
      </div>
    </div>
  );
};

export default Landing;

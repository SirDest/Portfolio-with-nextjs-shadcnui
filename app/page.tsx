import React from "react";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Socials from "@/app/components/Socials";
import Photo from "@/app/components/Photo";

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left'>
            <span>FrontEnd Developer</span>
            <h1 className='h1 text-xl'>Hello I`m</h1>
            <h1 className='h1 text-[#97BC62]'>Akinro Destined</h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel at crafting elegant digital experiences and I am
              proficient in various programming language and technologies.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
              >
                Download CV <FiDownload className='text-xl' />
              </Button>
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
    </section>
  );
};

export default Home;

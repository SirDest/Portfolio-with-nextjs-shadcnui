import React from "react";

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left'>
            <span>FrontEnd Developer</span>
            <h1 className='h1'>Hello I`m</h1>
            <h1 className='h1 text-accent'>Akinro Destined</h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel at crafting elegant digital experiences and I am
              proficient in various programming language and technologies.
            </p>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;

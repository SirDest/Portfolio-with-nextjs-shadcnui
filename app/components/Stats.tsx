"use client";
import React from "react";
import CountUp from "react-countUp";
import { stats } from "../utils/stats";

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:p-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none '>
          {stats.map(({ num, text }, index) => {
            return (
              <div
                className='flex-1 flex min-w-[calc(50%-16px)] gap-4 xl:justify-start xl:text-left items-center justify-center'
                key={index}
              >
                <CountUp
                  end={num}
                  duration={5}
                  delay={2}
                  className='text-4xl xl:text-6xl font-extrabold'
                />
                <span className='text-2xl xl:text-4xl'>+</span>
                <p
                  className={`${
                    text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

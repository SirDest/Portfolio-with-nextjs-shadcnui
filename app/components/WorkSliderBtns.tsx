"use client";
import React from "react";

import { useSwiper } from "swiper/react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import { generateClassName } from "../utils/tailwind";

const containerStyle = [
  "flex",
  "gap-2",
  "absolute",
  "right-0",
  "bottom-[calc(50%_-_22px)]",
  "xl:bottom-0",
  "z-20",
  "w-full",
  "justify-between",
  "xl:w-max",
  "xl:justify-none",
];

const btnStyles = [
  "bg-accent",
  "hover:bg-accent-hover",
  "text-primary",
  "text-[22px]",
  "w-[44px]",
  "h-[44px]",
  "flex",
  "justify-center",
  "items-center",
  "transition-all",
];

const iconStyles = ["flex"];

const WorkSliderBtns = () => {
  const swiper = useSwiper();
  return (
    <div className={generateClassName(containerStyle)}>
      <button
        className={generateClassName(btnStyles)}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={generateClassName(iconStyles)} />
      </button>

      <button
        className={generateClassName(btnStyles)}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={generateClassName(iconStyles)} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;

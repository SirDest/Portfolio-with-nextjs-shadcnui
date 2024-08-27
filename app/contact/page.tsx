"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Socials from "../components/Landing/Socials";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+234 (0) 813 284 6999",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "akinro.destined@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lagos, Nigeria",
  },
];
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let`s work together</h3>
              <p className='text-white/60'>
                I'd love to hear from you! Whether you have a question, a
                project proposal or just want to connect. Feel free to reach
                out. I'm always open to discussing new ideas, opportunities, or
                collaborations. You can also reach me directly via email or
                phone. Let's make something great together!
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='firstname' placeholder='Firstname' />
                <Input type='lastname' placeholder='Lastname' />
                <Input type='email' placeholder='Email Address' />
                <Input type='phone' placeholder='Phone Number' />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='est'>Web Development</SelectItem>
                    {/* <SelectItem value='cst'>UI/UX Design</SelectItem>
                    <SelectItem value='mst'>Logo Design</SelectItem> */}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className='h-[200px]'
                placeholder='Type your message here.'
              />
              <Button disabled size='md' className='max-w-40'>
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map(({ icon, title, description }, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{title}</p>
                      <h3 className='text-xl'>{description}</h3>
                    </div>
                  </li>
                );
              })}
              <li>
                <Socials />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

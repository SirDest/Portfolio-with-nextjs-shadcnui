"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "./utils/links";
import { link } from "fs";
import { ReceiptPoundSterling } from "lucide-react";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-[#97BC62]' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <div className='mt-24 mb-24 text-center text-2xl'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold'>
              A<span className='text-[#97BC62]'>.</span>D
            </h1>
          </Link>
        </div>
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map(({ name, path }, index) => {
            return (
              <Link
                key={index}
                href={path}
                className={`${
                  path === pathname &&
                  "text-[#97BC62] border-b-2 border-[#97BC62]"
                }text-4xl capitalize hover:text-[#97BC62] transition-all`}
              >
                {name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

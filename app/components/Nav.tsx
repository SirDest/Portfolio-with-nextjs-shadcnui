"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./utils/links";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex gap-6'>
      {links.map(({ name, path }, index) => (
        <Link
          key={index}
          href={path}
          className={`${
            path === pathname && "text-[#97BC62] border-b-2 border-[#97BC62]"
          } capitalize font-medium hover:text-[#97BC62] transition-all`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

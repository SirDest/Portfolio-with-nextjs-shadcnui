import Link from "next/link";
import Nav from "./Nav";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            A<span className='text-[#97BC62]'>.</span>D
          </h1>
        </Link>

        {/* Desktop nav and hire me button*/}

        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          {/* <Button className='gap-2'>
            Download CV <FiDownload className='text-xl' />
          </Button> */}
          <Button>Hire me</Button>
        </div>

        {/* Mobile nav */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

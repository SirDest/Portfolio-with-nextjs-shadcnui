import Link from "next/link";
import MobileNav from "./MobileNav";
import DownloadResumeButton from "../Landing/DownloadResume";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            A<span className='text-accent'>.</span>D
          </h1>
        </Link>

        {/* Desktop nav and hire me button*/}

        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <DownloadResumeButton />
          {/* <Button>Hire me</Button> */}
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

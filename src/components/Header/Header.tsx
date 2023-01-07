import Link from 'next/link';
import React from 'react';

import Logo from '../../../public/icons/coursely.svg';

const Header = () => {
  return (
    <header className="bg-[#FBFBFB]">
      <div className="container mx-auto flex flex-row items-center justify-between px-4 py-5">
        <Link href="#" className="w-[141px] transition-opacity duration-300 ease-in hover:opacity-80">
          <Logo />
        </Link>

        <p className="text-[15px] font-normal uppercase leading-normal text-[#757575]">launch a successful podcast</p>

        <button className="bg-[#E48D8B] py-1 px-5 text-[15px] leading-relaxed text-[#FFFFFF] transition-colors duration-300 ease-in hover:bg-[#017CFF]">
          Enroll Now
        </button>
      </div>
    </header>
  );
};

export default Header;

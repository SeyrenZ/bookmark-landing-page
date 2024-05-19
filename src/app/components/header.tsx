import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-full h-auto max-w-[1110px] mx-auto flex items-center justify-between">
        <div className="flex flex-col space-y-7">
          <div className="text-5xl text-primary-darkBlue font-bold">
            A Sample Bookmark
            <br />
            Manager
          </div>
          <div className="text-lg text-primary-darkBlue text-opacity-50 font-thin">
            A clean and simple interface to organize your favourite websites.
            <br />
            Open a new browser tab and see your sites load instantly. Try it
            <br /> for free.
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="w-fit px-[22px] py-[8px] bg-primary-blue hover:bg-transparent border-[2px] border-primary-blue rounded-md text-[14px] leading-[28px] font-medium text-white hover:text-primary-blue transition ease-in-out duration-300"
              style={{ boxShadow: "-0 10px 15px -3px rgba(82,103,223,0.32)" }}
            >
              Get it on Chrome
            </Link>
            <Link
              href="/"
              className="w-fit px-[22px] py-[8px] bg-[#F7F7F7] hover:bg-transparent border-[2px] border-[#F7F7F7] hover:border-primary-darkBlue hover:border-opacity-75 rounded-md text-[14px] leading-[28px] font-medium text-primary-darkBlue text-opacity-75 transition ease-in-out duration-300"
              style={{ boxShadow: "-0 10px 15px -3px rgba(36, 42, 69,0.1)" }}
            >
              Get it on Firefox
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

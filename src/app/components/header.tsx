import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-auto px-5">
      <div className="w-full h-auto max-w-[1110px] sm:py-[106px] py-[70px] mx-auto flex lg:flex-row flex-col items-center lg:justify-between sm:gap-y-[160px] gap-y-[90px]">
        <div className="flex flex-col lg:items-start items-center lg:justify-normal justify-center gap-y-7 lg:order-1 order-2">
          <div className="sm:text-5xl text-[30px] sm:leading-[1] leading-[40px] text-primary-darkBlue sm:font-bold font-medium lg:text-left text-center">
            A Sample Bookmark
            <br />
            Manager
          </div>
          <div className="w-full sm:max-w-[530px] text-lg text-primary-darkBlue text-opacity-50 font-thin lg:text-left text-center">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </div>
          <div className="flex items-center sm:gap-x-4 gap-x-[14px]">
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
        <div className="relative lg:order-2 order-1">
          <Image
            src="/illustration-hero.svg"
            width={576}
            height={386}
            alt="Hero Image"
            className="sm:w-[576px] w-[303px] rounded-3xl lg:mr-[-66px] relative z-20"
            style={{ boxShadow: "0 25px 50px -12px  rgba(82,103,223,0.32)" }}
          />
          <div className="absolute lg:top-[90px] sm:top-[120px] top-[50px] lg:right-[-290px] sm:right-[-240px] right-[-135px] z-10 sm:w-[660px] w-[400px] sm:h-[352px] h-[209px] bg-primary-blue rounded-[316px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;

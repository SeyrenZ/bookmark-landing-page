"use client";
import React, { useState, useEffect } from "react";
import {
  BookmarkLogo,
  BookmarkLogoMonochrome,
  FacebookIcon,
  HamburgerIcon,
  TwitterIcon,
} from "./svgs";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";

const Navbar = () => {
  type Link = {
    name: string;
    url: string;
  };

  const links: Link[] = [
    {
      name: "Features",
      url: "#",
    },
    {
      name: "Pricing",
      url: "#",
    },
    {
      name: "Contact",
      url: "#",
    },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isMenuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <div className="w-full h-auto sm:px-5 px-8 relative">
      {isMenuOpen && (
        <>
          <div className="absolute z-50 inset-0 bg-primary-darkBlue bg-opacity-[95%] w-full py-10 px-8 min-h-screen flex flex-col items-center justify-between space-y-6">
            <div className="w-full flex flex-col space-y-7">
              <div className="w-full border-y-[1px] mt-[115px] border-white border-opacity-15 flex flex-col items-center justify-center divide-y divide-white divide-opacity-15">
                {links.map((link, index) => (
                  <Link
                    href={link.url}
                    key={index}
                    className="w-full flex justify-center py-6 text-[20px] font-thin leading-[17px] tracking-[2.3px] text-white uppercase transition ease-in-out duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/"
                className="w-full flex items-center justify-center py-4 border-2 border-white rounded-md bg-transparent transition ease-in-out duration-300 text-[20px] leading-[17px] font-medium text-white tracking-[2.3px]"
              >
                LOGIN
              </Link>
            </div>
            <div className="flex items-center space-x-10">
              <FacebookIcon />
              <TwitterIcon />
            </div>
          </div>
        </>
      )}
      <nav className="relative z-50 w-full h-auto max-w-[1110px] mx-auto sm:pt-12 pt-10 flex items-center justify-between">
        <Link
          href="/"
          className="hover:scale-105 transition ease-in-out duration-300"
        >
          {!isMenuOpen ? <BookmarkLogo /> : <BookmarkLogoMonochrome />}
        </Link>
        <div className="sm:hidden block">
          <Hamburger
            toggled={isMenuOpen}
            toggle={setMenuOpen}
            size={20}
            color={isMenuOpen ? "#FFFFFF" : "#1E2A47"}
            label="Show Menu"
            distance="sm"
          />
        </div>
        <div className="sm:block hidden">
          <div className="flex items-center lg:space-x-10 space-x-8">
            {links.map((link, index) => (
              <Link
                href={link.url}
                key={index}
                className="text-[13px] leading-[17px] tracking-[1.5px] text-primary-darkBlue hover:text-primary-red uppercase transition ease-in-out duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/"
              className="w-fit px-[32px] py-[10px] rounded-lg bg-primary-red hover:bg-transparent border-[2px] border-primary-red transition ease-in-out duration-300 text-[13px] leading-[17px] text-white hover:text-primary-red tracking-[1.5px]"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import {
  BookmarkLogo,
  BookmarkLogoMonochrome,
  BookmarkLogoWhiteText,
  ErrorIcon,
  FacebookIcon,
  SuccessIcon,
  TwitterIcon,
} from "./svgs";
import Link from "next/link";

const Footer = () => {
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

  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isFormSucceded, setIsFormSucceded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setFormMessage("Whoops, make sure it’s an email");
      setIsFormSucceded(false);
      return;
    }
    setFormMessage("Success! Thank you for submitting");
    setIsFormSucceded(true);
    console.log("Form submitted");
  };

  return (
    <div className="w-full sm:pt-[149px] pt-[123px] flex flex-col">
      <div className="w-full py-20 bg-primary-blue">
        <div className="w-full h-auto sm:max-w-[442px] max-w-[311px] mx-auto flex flex-col items-center justify-center gap-y-[30px]">
          <div className="text-[13px] leading-[40px] tracking-[5px] font-medium text-white">
            35,000+ ALREADY JOINED
          </div>
          <div className="sm:text-[32px] text-[24px] sm:leading-[40px] leading-[28px] font-medium text-white text-center">
            Stay up-to-date with what we’re doing
          </div>
          <form
            className="w-full h-auto flex sm:flex-row flex-col items-center gap-x-4 gap-y-10"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="w-full h-[48px] sm:max-w-[300px] relative">
              <input
                className={`relative z-10 w-full h-full px-[20px] bg-white rounded-md focus:outline-none border-2 ${
                  formMessage
                    ? isFormSucceded
                      ? "border-green-500"
                      : "border-primary-red"
                    : "border-white"
                }`}
                placeholder="Enter your email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {formMessage && (
                <>
                  {isFormSucceded ? (
                    <SuccessIcon className="absolute right-[14px] top-[14px] z-10" />
                  ) : (
                    <ErrorIcon className="absolute right-[14px] top-[14px] z-10" />
                  )}
                  <div
                    className={`absolute inset-0 z-0 w-full h-[70px] px-[12px] py-[4px]  rounded-md flex items-end text-[10px] font-medium italic text-white ${
                      isFormSucceded ? "bg-green-500" : "bg-primary-red"
                    }`}
                  >
                    {formMessage}
                  </div>
                </>
              )}
            </div>
            <button
              type="submit"
              className="w-full h-[48px] sm:max-w-[126px] px-5 bg-primary-red rounded-md text-white text-[14px] leading-[28px] font-medium border-2 border-primary-red hover:bg-white hover:text-primary-red transition ease-in-out duration-300"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
      <div className="w-full px-5 bg-primary-darkBlue py-8">
        <div className="w-full max-w-[1110px] mx-auto flex sm:flex-row flex-col items-center justify-between gap-y-[44px]">
          <div className="flex sm:flex-row flex-col items-center md:gap-x-16 sm:gap-x-8 gap-y-[44px]">
            <BookmarkLogoWhiteText />
            <div className="flex sm:flex-row flex-col items-center gap-x-[46px] gap-y-[32px]">
              {links.map((link, index) => (
                <Link
                  href={link.url}
                  key={index}
                  className="text-[13px] leading-[17px] tracking-[1.5px] text-white hover:text-primary-red uppercase transition ease-in-out duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-10">
            <Link href="/">
              <FacebookIcon className="text-white hover:text-primary-red transition ease-in-out duration-300" />
            </Link>
            <Link href="/">
              <TwitterIcon className="text-white hover:text-primary-red transition ease-in-out duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

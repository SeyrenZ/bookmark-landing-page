"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  type Feature = {
    id: string;
    title: string;
    desc: string;
    image: string;
    link: string;
  };

  const features: Feature[] = [
    {
      id: "1",
      title: "Bookmark in one click",
      desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: "/illustration-features-tab-1.svg",
      link: "/",
    },
    {
      id: "2",
      title: "Speedy Searching",
      desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: "/illustration-features-tab-2.svg",
      link: "/",
    },
    {
      id: "3",
      title: "Easy Sharing",
      desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: "/illustration-features-tab-3.svg",
      link: "/",
    },
  ];
  const [Features, setFeatures] = useState<string>(features[0].id);
  const currentFeature =
    features.find((feature) => feature.id === Features) || features[0];

  return (
    <div className="w-full h-auto px-[32px] pt-20 pb-28">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col items-center gap-y-[72px]">
        <div className="w-full max-w-[540px] flex flex-col items-center gap-y-4">
          <div className="text-[30px] leading-[40px] text-primary-darkBlue font-medium">
            Features
          </div>
          <div className="sm:text-lg text-[15px] text-primary-darkBlue text-opacity-50 font-thin text-center">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </div>
        </div>
        <div className="w-full h-auto sm:h-[49px] max-w-[730px] mx-auto flex sm:flex-row flex-col sm:items-start items-center border-b-[1px] sm:border-t-0 border-t-[1px] border-primary-blue border-opacity-20 sm:divide-y-0 divide-y-[1px] divide-primary-blue divide-opacity-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full h-full sm:max-w-[243px] flex items-center justify-center"
            >
              <button
                className="sm:w-full w-auto h-full sm:py-0 py-5 text-[16px] leading-[17px] tracking-[0.5px] text-primary-darkBlue border-b-[4px] hover:border-primary-red border-transparent flex items-start justify-center transition ease-in-out duration-300"
                onClick={() => setFeatures(feature.id)}
              >
                {feature.title}
              </button>
            </div>
          ))}
        </div>
        <div className="w-full relative">
          <div className="absolute lg:top-[80px] top-[30px] lg:left-[-220px] sm:left-[-240px] left-[-135px] z-10 sm:w-[660px] w-[400px] sm:h-[352px] h-[209px] bg-primary-blue rounded-[316px]" />
          <div
            key={currentFeature.id}
            className={`fadeIn w-full flex lg:flex-row flex-col gap-y-[50px] items-center sm:justify-between relative z-20`}
          >
            <div className="relative">
              <Image
                src={currentFeature.image}
                width={536}
                height={346}
                alt="Hero Image"
                className="rounded-3xl relative sm:w-[536px] w-[311px]"
              />
            </div>
            <div className="w-full max-w-[445px] flex flex-col lg:items-start items-center sm:gap-y-4">
              <div className="sm:text-[32px] text-[24px] leading-[52px] font-bold text-primary-darkBlue">
                {currentFeature.title}
              </div>
              <div className="sm:text-lg text-[15px] text-primary-darkBlue text-opacity-50 lg:text-left text-center">
                {currentFeature.desc}
              </div>
              <Link
                href={currentFeature.link}
                className="mt-4 w-fit px-[22px] py-[8px] bg-primary-blue hover:bg-transparent border-[2px] border-primary-blue rounded-md text-[14px] leading-[28px] font-medium text-white hover:text-primary-blue transition ease-in-out duration-300"
                style={{
                  boxShadow: "-0 10px 15px -3px rgba(82,103,223,0.32)",
                }}
              >
                More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

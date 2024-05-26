import Image from "next/image";
import Link from "next/link";
import React from "react";

const Features = () => {
  type Feature = {
    title: string;
    desc: string;
    image: string;
    link: string;
  };

  const features: Feature[] = [
    {
      title: "Bookmark in one click",
      desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: "/illustration-features-tab-1.svg",
      link: "/",
    },
    {
      title: "Speedy Searching",
      desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: "/illustration-features-tab-2.svg",
      link: "/",
    },
    {
      title: "Easy Sharing",
      desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: "/illustration-features-tab-3.svg",
      link: "/",
    },
  ];

  return (
    <div className="w-full pt-20 pb-28">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col items-center gap-y-[72px]">
        <div className="w-full max-w-[540px] flex flex-col items-center gap-y-4">
          <div className="text-[30px] leading-[40px] text-primary-darkBlue font-medium">
            Features
          </div>
          <div className="text-lg text-primary-darkBlue text-opacity-50 font-thin text-center">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </div>
        </div>
        <div className="w-full h-[49px] max-w-[730px] mx-auto flex items-start border-b-[1px] border-primary-blue border-opacity-20">
          <div className="w-full h-full max-w-[243px] text-[16px] leading-[17px] tracking-[0.5px] text-primary-darkBlue border-b-[4px] hover:border-primary-red border-transparent flex items-start justify-center transition ease-in-out duration-300">
            Simple Bookmarking
          </div>
          <div className="w-full h-full max-w-[243px] text-[16px] leading-[17px] tracking-[0.5px] text-primary-darkBlue border-b-[4px] hover:border-primary-red border-transparent flex items-start justify-center transition ease-in-out duration-300">
            Speedy Searching
          </div>
          <div className="w-full h-full max-w-[243px] text-[16px] leading-[17px] tracking-[0.5px] text-primary-darkBlue border-b-[4px] hover:border-primary-red border-transparent flex items-start justify-center transition ease-in-out duration-300">
            Easy Sharing
          </div>
        </div>
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full flex lg:flex-row flex-col items-center justify-between"
          >
            <div className="relative">
              <Image
                src={feature.image}
                width={536}
                height={346}
                alt="Hero Image"
                className="rounded-3xl relative z-20"
              />
              <div className="absolute sm:top-[80px] top-[50px] lg:left-[-220px] sm:left-[-240px] left-[-135px] z-10 sm:w-[660px] w-[400px] sm:h-[352px] h-[209px] bg-primary-blue rounded-[316px]" />
            </div>
            <div className="w-full max-w-[445px] flex flex-col gap-y-4">
              <div className="text-[32px] leading-[52px] font-bold text-primary-darkBlue">
                {feature.title}
              </div>
              <div className="text-lg text-primary-darkBlue text-opacity-50">
                {feature.desc}
              </div>
              <Link
                href={feature.link}
                className="mt-3 w-fit px-[22px] py-[8px] bg-primary-blue hover:bg-transparent border-[2px] border-primary-blue rounded-md text-[14px] leading-[28px] font-medium text-white hover:text-primary-blue transition ease-in-out duration-300"
                style={{ boxShadow: "-0 10px 15px -3px rgba(82,103,223,0.32)" }}
              >
                More Info
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

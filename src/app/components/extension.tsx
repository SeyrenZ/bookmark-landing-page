import React from "react";
import { ChromeLogo, DotPattern, FirefoxLogo, OperaLogo } from "./svgs";
import Link from "next/link";

const Extension = () => {
  type Extension = {
    logo: JSX.Element;
    title: string;
    desc: string;
    link: string;
  };

  const extensions: Extension[] = [
    {
      logo: <ChromeLogo />,
      title: "Add to Chrome",
      desc: "Minimum version 62",
      link: "/",
    },
    {
      logo: <FirefoxLogo />,
      title: "Add to Firefox",
      desc: "Minimum version 55",
      link: "/",
    },
    {
      logo: <OperaLogo />,
      title: "Add to Opera",
      desc: "Minimum version 46",
      link: "/",
    },
  ];

  return (
    <div className="w-full px-9 lg:py-[145px]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-y-12 items-center justify-center">
        <div className="w-full max-w-[541px] flex flex-col sm:gap-y-4 items-center">
          <div className="sm:text-[32px] text-[24px] leading-[52px] font-medium text-primary-darkBlue">
            Download the extension
          </div>
          <div className="sm:text-lg text-[15px] text-primary-darkBlue text-opacity-50 text-center">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </div>
        </div>
        <div className="w-full sm:h-[451px] h-auto flex sm:flex-row flex-col items-center justify-center lg:gap-x-9 gap-y-10 gap-x-5">
          {extensions.map((extension, index) => {
            let placementClass = "";
            if (index % 3 === 0) {
              placementClass = "sm:place-self-start";
            } else if (index % 3 === 1) {
              placementClass = "sm:place-self-center";
            } else {
              placementClass = "sm:place-self-end";
            }
            return (
              <div
                key={index}
                className={`${placementClass} w-[280px] h-[371px] rounded-2xl shadow-lg flex items-center justify-center bg-white`}
                style={{ boxShadow: "-0 10px 15px -3px rgba(82,103,223,0.32)" }}
              >
                <div className="mt-4 w-full flex flex-col gap-y-[29px] items-center">
                  <div>{extension.logo}</div>
                  <div className="flex flex-col gap-y-[6px]">
                    <div className="text-[20px] font-bold text-primary-darkBlue">
                      {extension.title}
                    </div>
                    <div className="text-[15px] leading-[28px] text-primary-darkBlue text-opacity-50 text-center">
                      {extension.desc}
                    </div>
                  </div>
                  <DotPattern />
                  <Link
                    href={extension.link}
                    className="w-full lg:max-w-[232px] sm:max-w-[180px] max-w-[232px] h-[48px] flex items-center justify-center bg-primary-blue hover:bg-transparent border-[2px] border-primary-blue rounded-md text-[14px] leading-[28px] font-medium text-white hover:text-primary-blue transition ease-in-out duration-300"
                  >
                    Add & Install Extension
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Extension;

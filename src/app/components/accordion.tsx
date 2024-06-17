"use client";
import React, { useState } from "react";
import { ArrowIcon } from "./svgs";
import Link from "next/link";

const Accordion = () => {
  type FAQ = {
    question: string;
    answer: string;
  };

  const faqs: FAQ[] = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Ac turpis egestas maecenas pharetra convallis posuere. Purus sit amet luctus venenatis lectus magna fringilla. Netus et malesuada fames ac turpis. Duis tristique sollicitudin nibh sit amet commodo.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Ac turpis egestas maecenas pharetra convallis posuere. Purus sit amet luctus venenatis lectus magna fringilla. Netus et malesuada fames ac turpis. Duis tristique sollicitudin nibh sit amet commodo.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Ac turpis egestas maecenas pharetra convallis posuere. Purus sit amet luctus venenatis lectus magna fringilla. Netus et malesuada fames ac turpis. Duis tristique sollicitudin nibh sit amet commodo.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Ac turpis egestas maecenas pharetra convallis posuere. Purus sit amet luctus venenatis lectus magna fringilla. Netus et malesuada fames ac turpis. Duis tristique sollicitudin nibh sit amet commodo.",
    },
  ];

  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  return (
    <div className="w-full sm:py-5 py-[140px] px-8">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col items-center justify-center sm:gap-y-[52px] gap-y-[48px]">
        <div className="max-w-[540px] flex flex-col gap-y-4 items-center justify-center">
          <div className="sm:text-[32px] sm:leading-[52px] text-[24px] leading-[30px] font-medium text-primary-darkBlue text-center">
            Frequently Asked Questions
          </div>
          <div className="sm:text-lg sm:leading-[28px] text-[15px] leading-[25px] text-primary-darkBlue text-opacity-50 text-center">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </div>
        </div>
        <div className="divide-y-2 border-y-2">
          {faqs.map((faq, index) => (
            <div
              className="max-w-[540px] flex flex-col items-center justify-center group"
              key={index}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full py-3"
              >
                <span className="transition ease-in-out duration-30 text-primary-darkBlue group-hover:text-primary-red sm:text-lg text-[15px] leading-[32px]">
                  {faq.question}
                </span>
                {/* Animated Button */}
                <svg
                  width="20"
                  height="13"
                  viewBox="0 0 20 13"
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition ease-in-out duration-300 ${
                    accordionOpen === index && "transform rotate-180"
                  }`}
                >
                  <path
                    d="M2 2L10 10L18 2"
                    stroke={`${
                      accordionOpen === index ? "#F47A5A" : "#5267DF"
                    }`}
                    strokeWidth="3"
                  />
                </svg>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  accordionOpen === index
                    ? "grid-rows-[1fr] opacity-100 pb-6"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden text-primary-darkBlue text-opacity-75 sm:text-[16px] sm:leading-[36px] text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="sm:mb-2 w-fit px-[22px] py-[8px] bg-primary-blue hover:bg-transparent border-[2px] border-primary-blue rounded-md text-[14px] leading-[28px] font-medium text-white hover:text-primary-blue transition ease-in-out duration-300"
          style={{
            boxShadow: "-0 10px 15px -3px rgba(82,103,223,0.32)",
          }}
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default Accordion;

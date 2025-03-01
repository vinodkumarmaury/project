"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import "@/styles/hero-section.css";

import demoImage from "./assets/UI-Demo.jpg";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [reverse, setReverse] = useState(false);
  const text = "Introducing Magic UI Template".split("");

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setReverse((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Galaxy Background */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="stars-container absolute inset-0">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-yellow-900/30 to-background/90"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Badge with shimmer and letter wave */}
            <div
              className={`group relative inline-flex h-7 overflow-hidden rounded-full p-[1px] ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[-1rem]"
              } transition-standard`}
            >
              <span className="absolute inset-0 rounded-full border border-white/5 group-hover:opacity-0 transition-opacity duration-300"></span>
              <span className="absolute inset-[-1000%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-shimmer"></span>
              <div className="group inline-flex h-full w-full items-center justify-center rounded-full bg-dull hover:bg-less-dull backdrop-blur-3xl px-3 text-xs gap-1 transition-all duration-300 z-10">
                <p className="cursor-pointer mx-auto inline-flex items-center justify-center">
                  <span className="mr-1">✨</span>
                  <span className="badge-text">
                    {text.map((letter, index) => {
                      const delay = reverse
                        ? (text.length - 1 - index) * 50
                        : index * 50;
                      return (
                        <span
                          key={index}
                          className={`letter delay-${index} ${letter === " " ? "mr-space" : ""}`}
                          data-delay={delay}
                        >
                          {letter}
                        </span>
                      );
                    })}
                  </span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </p>
              </div>
            </div>

            {/* Heading */}
            <h1
              className={`py-6 text-5xl font-medium leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl ${
                mounted
                  ? "opacity-100 translate-y-0 delay-200"
                  : "opacity-0 translate-y-[-1rem]"
              } transition-standard`}
            >
              <span className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                Magic UI is the new way
                <br className="hidden md:block" /> to build landing pages.
              </span>
            </h1>

            {/* Paragraph */}
            <p
              className={`mb-12 text-lg tracking-tight text-gray-400 md:text-xl ${
                mounted
                  ? "opacity-100 translate-y-0 delay-400"
                  : "opacity-0 translate-y-[-1rem]"
              } transition-standard`}
            >
              Beautifully designed, animated components and templates built with
              <br className="hidden md:block" /> Tailwind CSS, React, and Framer
              Motion.
            </p>

            {/* Button */}
            <Button
              className={`group gap-2 ${
                mounted
                  ? "opacity-100 translate-y-0 delay-600"
                  : "opacity-0 translate-y-[-1rem]"
              } transition-standard`}
            >
              <span>Get Started for free</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
              </svg>
            </Button>

            {/* Animated Card with Clockwise Moving Border */}
            <div
              className={`relative mt-20 w-full max-w-4xl ${
                mounted ? "opacity-100" : "opacity-0"
              } transition-opacity duration-4000 ease-in-out`}
            >
              <MovingBorderButton
                borderRadius="1.75rem"
                className="bg-black w-full p-0 overflow-hidden text-white border-slate-800"
              >
                <div className="relative w-full">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-black/20 pointer-events-none"></div>
                  <div className="relative w-full aspect-[16/9]">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-gray-400">
                      UI Demo Preview
                    </div>
                    <Image
                      src={demoImage}
                      alt="UI Demo"
                      className="relative w-full h-full rounded-xl object-cover z-0"
                      priority
                    />
                  </div>
                </div>
              </MovingBorderButton>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient styled div added above the clients section - Fixed with explicit color values */}
      <div 
        className="gradient-overlay pointer-events-none relative -z-[2] mx-auto h-[50rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] my-[-18.8rem]"
      >
        <div className="gradient-inner absolute inset-0 h-full w-full opacity-40"></div>
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] w-[200%] rounded-[50%] border-t border-slate-800 bg-black"></div>
      </div>

      <section
        id="clients"
        className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
      >
        <div className="py-14">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <h2 className="text-center text-sm font-semibold text-gray-600">
              TRUSTED BY TEAMS FROM AROUND THE WORLD
            </h2>
            <div className="mt-6">
              <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
                <li>
                  <Image
                    src="https://cdn.magicui.design/companies/Google.svg"
                    width={112}
                    height={32}
                    className="h-8 w-28 px-2 brightness-0 invert"
                    alt="Google"
                  />
                </li>
                <li>
                  <Image
                    src="https://cdn.magicui.design/companies/Microsoft.svg"
                    width={112}
                    height={32}
                    className="h-8 w-28 px-2 brightness-0 invert"
                    alt="Microsoft"
                  />
                </li>
                <li>
                  <Image
                    src="https://cdn.magicui.design/companies/GitHub.svg"
                    width={112}
                    height={32}
                    className="h-8 w-28 px-2 brightness-0 invert"
                    alt="GitHub"
                  />
                </li>
                <li>
                  <Image
                    src="https://cdn.magicui.design/companies/Uber.svg"
                    width={112}
                    height={32}
                    className="h-8 w-28 px-2 brightness-0 invert"
                    alt="Uber"
                  />
                </li>
                <li>
                  <Image
                    src="https://cdn.magicui.design/companies/Notion.svg"
                    width={112}
                    height={32}
                    className="h-8 w-28 px-2 brightness-0 invert"
                    alt="Notion"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
  #clients {
padding-bottom: 90px;
    position: relative;
    overflow: hidden;
  }
  #clients::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      ellipse 70% 50% at bottom center,
      rgb(47, 35, 22) 0%,
      rgb(0, 0, 0) 100%
    );
    z-index: -1;
  }
  
  /* Move inline styles to CSS classes */
  .gradient-overlay {
    --color-one: rgb(234, 179, 8);
  }
  
  .gradient-inner {
    background-image: radial-gradient(circle at bottom center, rgb(234, 179, 8), transparent 70%);
  }
`}</style>
    </>
  );
}

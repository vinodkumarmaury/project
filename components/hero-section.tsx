"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  // New state to toggle the wave direction
  const [reverse, setReverse] = useState(false);
  const text = "Introducing Magic UI Template".split("");

  useEffect(() => {
    setMounted(true);
    // Toggle reverse every 4000ms (matching the 4s letterWave animation duration)
    const interval = setInterval(() => {
      setReverse((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="stars-container absolute inset-0">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge with shimmer effect */}
          <div
            className={`group relative inline-flex h-7 overflow-hidden rounded-full p-[1px] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-1rem]'} transition-standard`}
          >
            {/* Default border when not hovered */}
            <span className="absolute inset-0 rounded-full border border-white/5 group-hover:opacity-0 transition-opacity duration-300"></span>

            {/* Shimmer border on hover */}
            <span className="absolute inset-[-1000%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-shimmer"></span>

            {/* Badge content */}
            <div className="group inline-flex h-full w-full items-center justify-center rounded-full bg-dull hover:bg-less-dull backdrop-blur-3xl px-3 text-xs gap-1 transition-all duration-300 z-10">
              <p className="mx-auto inline-flex items-center justify-center">
                {/* Static emoji */}
                <span className="mr-1">✨</span>
                {/* Wrap the text so each letter is in its own span with calculated delay */}
                <span className="badge-text">
                  {text.map((letter, index) => {
                    // In normal mode: delay increases from left (index * 50ms)
                    // In reverse mode: delay increases from right ((text.length - 1 - index) * 50ms)
                    const delay = reverse ? (text.length - 1 - index) * 50 : index * 50;
                    return (
                      <span 
                        key={index} 
                        className="letter" 
                        style={{ 
                          animationDelay: `${delay}ms`,
                          // No gap between letters, but if the letter is a space―add a gap
                          marginRight: letter === " " ? "1ch" : "0"
                        }}
                      >
                        {letter}
                      </span>
                    );
                  })}
                </span>
                {/* Static SVG icon */}
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

          {/* Heading with gradient effect */}
          <h1
            className={`py-6 text-5xl font-medium leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl ${mounted ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-[-1rem]'} transition-standard`}
          >
            <span className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
              Magic UI is the new way
              <br className="hidden md:block" /> to build landing pages.
            </span>
          </h1>

          {/* Paragraph with animation */}
          <p
            className={`mb-12 text-lg tracking-tight text-gray-400 md:text-xl ${mounted ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-[-1rem]'} transition-standard`}
          >
            Beautifully designed, animated components and templates built with
            <br className="hidden md:block" /> Tailwind CSS, React, and Framer Motion.
          </p>

          {/* Button with animation */}
          <Button
            className={`group gap-2 ${mounted ? 'opacity-100 translate-y-0 delay-600' : 'opacity-0 translate-y-[-1rem]'} transition-standard`}
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
        </div>
      </div>
    </section>
  );
}
"use client";
import React from "react";
import { InfiniteMovingImages } from "./ui/infinite-moving-images";
import Image from "next/image";

// Keep the logos array with explicit colors
const logos = [
  <svg
    key="logo1"
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="72"
    fill="none"
    stroke="#ef4444" // Explicit red color instead of text-red-500
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full flex items-center justify-center"
  >
    <g transform="translate(10,10) scale(2,2)"> 
      <path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      />
    </g>
  </svg>,
  
  <svg
    key="logo2"
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="72"
    fill="none"
    stroke="#3b82f6" // Explicit blue color instead of text-blue-500
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full flex items-center justify-center"
  >
    <g transform="translate(10,10) scale(2,2)">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5l-2.96 2.96a2.17 2.17 0 0 0 0 3.08L12 14" />
      <path d="M18 15l-2-2" />
      <path d="M15 18l-2-2" />
    </g>
  </svg>,
  
  <svg
    key="logo3"
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="72"
    fill="none"
    stroke="#22c55e" // Explicit green color instead of text-green-500
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full flex items-center justify-center"
  >
    <g transform="translate(10,10) scale(2,2)">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </g>
  </svg>,
  
  <svg
    key="logo4"
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="72"
    fill="none"
    stroke="#eab308" // Explicit yellow color instead of text-yellow-500
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full flex items-center justify-center"
  >
    <g transform="translate(10,10) scale(2,2)">
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </g>
  </svg>,
  
  <Image
    key="logo5"
    src="https://cdn.magicui.design/companies/Google.svg"
    width={112}
    height={32}
    className="px-2 brightness-0 invert" // Removed dark: prefix
    alt="Google"
  />
];

export function CTASection() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Infinite Moving Logos */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="w-full">
          <InfiniteMovingImages
            items={logos}
            direction="right"
            speed="fast"
            pauseOnHover={false}
            className="w-full"
          />
        </div>
        <div className="w-full">
          <InfiniteMovingImages
            items={logos}
            direction="right"
            speed="normal"
            pauseOnHover={false}
            className="w-full"
          />
        </div>
        <div className="w-full">
          <InfiniteMovingImages
            items={logos}
            direction="right"
            speed="normal"
            pauseOnHover={false}
            className="w-full"
          />
        </div>
        <div className="w-full">
          <InfiniteMovingImages
            items={logos}
            direction="right"
            speed="slow"
            pauseOnHover={false}
            className="w-full"
          />
        </div>
      </div>

      {/* Gradient overlay - moved from external CSS to inline styles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/50"></div>
      </div>

      {/* Foreground CTA Text */}
      <div className="relative z-20 mt-60 flex flex-col items-center text-center text-white">
        {/* Logo SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="border-2 p-[8px] bg-black text-white mx-auto h-28 w-28 rounded-xl lg:size-24 mb-4"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
          <path d="m18 15-2-2"></path>
          <path d="m15 18-2-2"></path>
        </svg>

        <h1 className="text-3xl font-bold lg:text-4xl">Stop wasting time on design.</h1>
        <p className="mt-2">Start your 7-day free trial. No credit card required.</p>

        <a
          href="#"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent hover:bg-white hover:text-black h-10 group mt-4 rounded-[2rem] px-6"
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a>
      </div>

      {/* Add explicit styles to replace the external CSS file */}
      <style jsx>{`
        section {
          background-color: black;
          color: white;
        }
      `}</style>
    </section>
  );
}

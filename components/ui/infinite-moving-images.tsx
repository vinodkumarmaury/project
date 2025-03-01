"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingImages = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false, // set to false so it never pauses on hover
  className,
}: {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const scroller = scrollerRef.current;
      let iterations = 0;
      // Duplicate items until the scroller's width is at least 2× the container.
      while (scroller.scrollWidth < containerWidth * 2 && iterations < 10) {
        const nodes = Array.from(scroller.children);
        nodes.forEach((child) => {
          const clone = child.cloneNode(true);
          scroller.appendChild(clone);
        });
        iterations++;
      }

      // Set CSS variables for direction and speed
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
      let duration = "20s";
      if (speed === "fast") duration = "20s";
      else if (speed === "normal") duration = "40s";
      else if (speed === "slow") duration = "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
      setStart(true);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative overflow-hidden bg-black items-center", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex gap-4 py-4 flex-nowrap justify-center items-center",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx} className="flex-shrink-0 border-2  bg-black rounded-md flex justify-center items-center">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
"use client";

import React from "react";
import { Button } from "@/components/ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <Button
        movingBorder
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-2"
      >
        Borders are cool
      </Button>
      
      {/* You could also use it with the UI demo */}
      <div className="w-full max-w-xl">
        <Button
          movingBorder
          borderRadius="0.75rem"
          className="bg-transparent w-full p-0"
        >
          <div className="relative w-full rounded-xl bg-black/50 backdrop-blur-sm overflow-hidden z-10 border border-neutral-200 dark:border-slate-800">
            <div className="relative">
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-yellow-500/15 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
              <div className="w-full aspect-[16/9] bg-slate-900 p-8 flex items-center justify-center text-white">
                Content inside moving border
              </div>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
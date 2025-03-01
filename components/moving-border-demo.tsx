"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/moving-border";

export function MovingBorderDemo() {
  // Add state to track if component is mounted (client-side)
  const [mounted, setMounted] = useState(false);
  
  // Set mounted state once component is in the browser
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      {/* First button - fixed to use consistent styling */}
      <Button
        movingBorder
        borderRadius="1.75rem"
        className="bg-slate-900 text-white border-slate-800 px-6 py-2"
      >
        Borders are cool
      </Button>
      
      {/* UI demo with explicit styling */}
      <div className="w-full max-w-xl">
        <Button
          movingBorder
          borderRadius="0.75rem"
          className="bg-transparent w-full p-0"
        >
          <div className="relative w-full rounded-xl bg-black/50 backdrop-blur-sm overflow-hidden z-10 border border-slate-800">
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
      
      {/* Add CSS to ensure consistent appearance */}
      <style jsx global>{`
        .moving-border {
          --border-color: rgba(76, 78, 100, 0.3);
          --background-color: rgb(15, 23, 42); /* slate-900 */
          --text-color: white;
        }
      `}</style>
    </div>
  );
}
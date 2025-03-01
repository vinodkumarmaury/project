"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [mounted, setMounted] = useState(false);

  // Mount animation for header
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      // Reset animation state when opening
      setActiveIndex(-1);
    }
  };

  // Animate items in sequence when menu opens
  useEffect(() => {
    if (isMenuOpen) {
      const totalItems = 4; // 4 nav items
      let index = 0;
      
      const interval = setInterval(() => {
        if (index < totalItems) {
          setActiveIndex(index);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Delay between each item appearing
      
      return () => clearInterval(interval);
    }
  }, [isMenuOpen]);

  const getNavItemClass = (index: number) => {
    return `border-b border-gray-100/10 py-1 nav-item-transition ${activeIndex >= index ? 'nav-item-visible' : 'nav-item-hidden'}`;
  };

  return (
    <>
      <header className={`fixed left-0 top-0 z-50 w-full border-b border-gray-800 bg-black/70 backdrop-blur-[12px] ${mounted ? 'animate-fade-in' : 'translate-y-[-1rem] opacity-0'}`}>
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto max-w-7xl flex h-[3.5rem] items-center justify-between">
          <Link href="/" className="text-md flex items-center font-medium text-white">
            Magic UI
          </Link>
          
          <div className="ml-auto flex h-full items-center">
            <Link href="/signin" className="mr-4 sm:mr-6 text-[14px] text-white hover:text-gray-300 transition-colors">
              Log in
            </Link>
            <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-black bg-white hover:bg-gray-200 shadow-sm h-9 px-3 sm:px-4 py-2 mr-2 sm:mr-6 text-[14px] transition-colors">
              Sign up
            </Link>
          </div>
          
          {/* Hamburger Menu Button */}
          <button onClick={toggleMenu} className="ml-0 md:hidden text-white">
            <span className="sr-only">Toggle menu</span>
            <AlignJustify className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 ${isMenuOpen ? 'block' : 'hidden'}`}></div>
      <nav 
        className={`fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-black/95 backdrop-blur-[12px] text-white ${isMenuOpen ? '' : 'pointer-events-none'} transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto max-w-7xl flex h-[3.5rem] items-center justify-between">
          <Link href="/" className="text-md flex items-center font-medium text-white">
            Magic UI
          </Link>
          <button onClick={toggleMenu} className="ml-0 md:hidden text-white">
            <span className="sr-only">Toggle menu</span>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <ul className="flex flex-col uppercase px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto max-w-7xl">
          <li className={getNavItemClass(0)}>
            <Link 
              href="#features" 
              className="hover:text-gray-400 flex h-12 w-full items-center text-[18px] text-white transition-[color,transform] duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              FEATURES
            </Link>
          </li>
          <li className={getNavItemClass(1)}>
            <Link 
              href="#pricing" 
              className="hover:text-gray-400 flex h-12 w-full items-center text-[18px] text-white transition-[color,transform] duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              PRICING
            </Link>
          </li>
          <li className={getNavItemClass(2)}>
            <Link 
              href="#testimonials" 
              className="hover:text-gray-400 flex h-12 w-full items-center text-[18px] text-white transition-[color,transform] duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              CAREERS
            </Link>
          </li>
          <li className={getNavItemClass(3)}>
            <Link 
              href="#faq" 
              className="hover:text-gray-400 flex h-12 w-full items-center text-[18px] text-white transition-[color,transform] duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>

      {/* Add explicit styles for animations and transitions */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
          animation-delay: 0.2s;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .nav-item-transition {
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
        
        .nav-item-hidden {
          opacity: 0;
          transform: translateY(10px);
        }
        
        .nav-item-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Fix typo in "CONTACT US" menu item */
        :global(header) {
          background-color: rgba(0, 0, 0, 0.7);
          border-bottom-color: #1f1f1f;
        }
        
        :global(nav) {
          background-color: rgba(0, 0, 0, 0.95);
        }
      `}</style>
    </>
  );
}
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          {/* Company info */}
          <div className="mb-12 flex-col flex gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Startup</span>
            </Link>
            <p className="max-w-xs">Building the future of software, one pixel at a time.</p>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">Product</h2>
              <ul className="gap-2 grid">
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Features</Link></li>
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Pricing</Link></li>
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Integrations</Link></li>
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Changelog</Link></li>
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">Company</h2>
              <ul className="gap-2 grid">
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">About</Link></li>
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Blog</Link></li>
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Careers</Link></li>
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Customers</Link></li>
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="gap-2 grid">
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Privacy Policy</Link></li>
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Terms of Service</Link></li>
                <li><Link href="#" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and social links */}
        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
          <div className="flex space-x-5 sm:justify-center sm:mt-0">
            <a className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600" href="#">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </a>
            <a className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600" href="#">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
            <a className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600" href="#">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600" href="#">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600" href="#">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()} <a className="cursor-pointer" href="/">Startup</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
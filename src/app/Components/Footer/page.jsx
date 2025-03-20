"use client";

import Image from 'next/image';
import gitIcon from '../../../../public/assets/LogoGit.svg'

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        py-10
        md:py-12
        lg:py-16
        px-6
        md:px-12
        lg:px-24
        text-white
        bg-gradient-to-b
        from-[#170F28]
        to-[#2a1a4a]
      "
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <h1
          className="
            text-[50px]
            shadow
            md:text-[200px]
            lg:text-[150px]
            font-bold
            tracking-[1.5rem]
            lg:tracking-[6rem]
            text-[#BE9EFF2B]
            opacity-20
            absolute
            bottom-[150px]
            md:bottom-[-40px]
            lg:bottom-[40px]
            left-20
            
            right-0
            text-center
          "
          style={{ textShadow: "0 0 30px rgba(0,0,0,0.3)" }}
        >
          OYEDELE
        </h1>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-10 lg:mb-16">
          <div className="mb-10 lg:mb-0 lg:max-w-sm text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.3em]  mb-4 md:mb-6">
              O Y E D E L E
            </h2>
            <p className="text-sm text-[#D2BCFF] leading-relaxed max-w-xs mx-auto lg:mx-0">
              OyeDele is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </p>
          </div>

          <div className="w-full lg:w-auto text-center lg:text-left">
            <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 lg:hidden">
            <a href="#" className="hover:text-purple-300 transition-colors">
                About Us
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                Web Chat
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                Terms of use
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                GDPR Policy
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                Cookies Settings
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                Contact Us
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-row flex-wrap gap-10 text-base">

              <a href="#" className="hover:text-purple-300 transition-colors">
                Web Chat
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                Terms of use
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                GDPR Policy
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>

        

        <div>
          <div className="w-full h-px bg-[#3a2a56] my-8"></div>

          <div className="flex flex-col-reverse gap-[26px] md:flex-row justify-between items-center">
            <p className="text-xs text-[#9064E8] mb-6 md:mb-0 tracking-wider uppercase">
              © Copyright 2022, All Rights Reserved by OYEDELE
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3a2a56] flex items-center justify-center
                 hover:bg-purple-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3a2a56] flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3a2a56] flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3a2a56] flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
              <Image src={gitIcon} alt='git-icon' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

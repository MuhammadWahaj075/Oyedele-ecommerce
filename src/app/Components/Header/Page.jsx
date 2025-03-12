"use client";
import { useState } from "react";
import Image from "next/image";
import HeartIcon from "../../../../public/assets/HeartIcon.png";
import ShoppingCart from "../../../../public/assets/ShoppingCartIcon.png";
import User from "../../../../public/assets/UserIcon.png";
import { Menu, X } from "lucide-react";
import { ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // bg-red-400 lg:bg-green-400 md:bg-orange-400 sm:bg-purple-400
    <header className="bg-gradient-to-r from-[#2C1F49] to-[#170F28] w-full py-[13.5px] sm:py-[29px] px-[24px] sm:px-[24px] md:px-[45px] xl:px-[120px] flex items-center justify-between text-white  ">
      <Link href={'/'} className="text-xl flex justify-center items-center font-[600] min-h-[37px] tracking-[.50em]">OYODELE</Link>

      <nav className="hidden lg:flex gap-[23] text-sm">
        <Link href="#" className="hover:underline">Home</Link>
        <div className="flex gap-[5px]">
          <Link href="/stores" className="hover:underline">Stores</Link>
          <ChevronDown className="w-[17px] h-[20px]" />
        </div>
        <div className="flex gap-[5px]">
          <Link href="#" className="hover:underline">Service-Stores</Link>
          <ChevronDown className="w-[17px] h-[20px]" />
        </div>
        <Link href="#" className="hover:underline">Feedback</Link>
      </nav>

      <div className=" flex gap-[24px] md:gap-[50px] lg:gap-[24px]">
        <div className="flex items-center gap-4 sm:gap-[24px]">
          <Image src={HeartIcon} alt="HeartIcon" className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px]" />
          <Image src={ShoppingCart} alt="ShoppingCart" className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px]" />
        </div>
        <Image src={User} alt="User" className="hidden lg:flex sm-[22px] h-[22px] sm:w-[28px] sm:h-[28px]" />

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}

          {menuOpen && (
            <div className="absolute top-[60px] z-20 sm:top-[95px] left-0 w-full bg-[#170F28] text-white flex flex-col items-center space-y-4 py-4 lg:hidden">
              <Link href="#" className="hover:underline">Home</Link>
              <div className="flex gap-[5px]">
                <Link href="/stores" className="hover:underline">Stores</Link>
                <ChevronDown className="w-[17px] h-[20px]" />
              </div>
              <div className="flex gap-[5px]">
                <Link href="#" className="hover:underline">Service-Stores</Link>
                <ChevronDown className="w-[17px] h-[20px]" />
              </div>
              <Link href="#" className="hover:underline">Feedback</Link>
            </div>
          )}
        </button>


      </div>


    </header>
  );
}
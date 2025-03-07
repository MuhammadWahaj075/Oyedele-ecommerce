// import Image from "next/image";

// export default function Header() {
//   return (
//     <header className="w-full h-[100px] px-[120px] flex items-center justify-between bg-gradient-to-r from-[#2C1F49] to-[#170F28] text-white">
//       <h1 className="text-xl font-bold tracking-wide">OYODELE</h1>

//       <nav className="flex space-x-6 text-sm">
//         <a href="#" className="hover:underline">Home</a>
//         <a href="#" className="hover:underline">Stores </a>
//         <a href="#" className="hover:underline">Service-Stores</a>
//         <a href="#" className="hover:underline">Feedback</a>
//       </nav>

//       <div className="flex gap-[20] text-lg">
//       <Image src="/assets/heart.png" alt="User Icon" width={28} height={28} />
//       <Image src="/assets/shopping-cart.png" alt="User Icon" width={28} height={28} />
//       <Image src="/assets/user.png" alt="User Icon" width={28} height={28} />
//       </div>
//     </header>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-[100px] px-6 flex items-center justify-between bg-gradient-to-r from-[#2C1F49] to-[#170F28] text-white md:px-28 lg:bg-orange-400 md:bg-green-500">
      <h1 className="text-xl font-bold tracking-wide">OYODELE</h1>
      <button 
        className="md:hidden text-white focus:outline-none" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className="hidden md:flex space-x-6 text-sm">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Stores</a>
        <a href="#" className="hover:underline">Service-Stores</a>
        <a href="#" className="hover:underline">Feedback</a>
      </nav>

      <div className="hidden md:flex gap-5">
        <Image src="/assets/heart.png" alt="Wishlist" width={28} height={28} />
        <Image src="/assets/shopping-cart.png" alt="Cart" width={28} height={28} />
        <Image src="/assets/user.png" alt="Profile" width={28} height={28} />
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-[#170F28] text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Stores</a>
          <a href="#" className="hover:underline">Service-Stores</a>
          <a href="#" className="hover:underline">Feedback</a>
          <div className="flex gap-5 mt-4">
            <Image src="/assets/heart.png" alt="Wishlist" width={28} height={28} />
            <Image src="/assets/shopping-cart.png" alt="Cart" width={28} height={28} />
            <Image src="/assets/user.png" alt="Profile" width={28} height={28} />
          </div>
        </div>
      )}
    </header>
  );
}

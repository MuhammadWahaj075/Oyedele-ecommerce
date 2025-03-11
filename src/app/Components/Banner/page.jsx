import Image from "next/image";
import { Heart } from "lucide-react";
import scroll from "../../../../public/assets/bannerscroolimage.jpg";
import banner from "../../../../public/assets/banner-imge.svg";

export default function Banner() {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="lg:px-[120px] max-w-6xl w-full mx-auto relative p-6 md:px-6 px-5">

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10">
          <div className="flex-1 space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                
              <div className="w-2 h-2 rounded-full bg-[#704EB5]"></div>
              <div className="w-2 h-2 rounded-full bg-[#D2BCFF]"></div>
              <div className="w-2 h-2 rounded-full bg-[#D2BCFF]"></div>
              <div className="w-2 h-2 rounded-full bg-[#D2BCFF]"></div>

              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Gizmo Hub</h1>
              <p className="text-sm font-medium tracking-wider text-gray-500">ELECTRONICS & GADGETS</p>
            </div>

            <p className="text-gray-600 max-w-lg">
              Stay ahead with the latest tech! From smart gadgets to cutting-edge accessories, Gizmo Hub brings you the
              future of technology. Discover premium products at the innovation at your fingertips!
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2">Learn More</button>
{/* 
            <div className="space-y-4 pt-4">
              <p className="text-gray-500 font-medium">+150 Testimonials</p>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">
                  This Thing is built so Well! Super Smooth Feel, Totally Worth it!
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center text-xs text-white">
                      JD
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-xs text-white">
                      KL
                    </div>
                    <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white flex items-center justify-center text-xs text-white">
                      MN
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    <span className="text-sm text-gray-600">102</span>
                  </div>
                </div>
              </div>
            </div> */}

<div className="relative w-[474px] h-[217px] bg-white/50 backdrop-blur-[38.5px] shadow-lg rounded-[22px] p-6">
      <p className="text-gray-500 font-medium text-lg">+150 <span className="text-sm">Testimonials</span></p>

      <p className="text-lg font-semibold text-gray-800 mt-2">
        This Thing is Built So Well! Super Smooth Feel, Totally Worth It!
      </p>

      <div className="flex items-center justify-between mt-4">
        {/* Avatars */}
        <div className="flex -space-x-2">
          <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center text-xs text-white">
            🧑🏾
          </div>
          <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-xs text-white">
            👩🏽
          </div>
          <div className="w-10 h-10 rounded-full bg-yellow-500 border-2 border-white flex items-center justify-center text-xs text-white">
            👨🏼
          </div>
        </div>

        {/* Likes */}
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 fill-red-500 text-red-500" />
          <span className="text-lg text-gray-600">50</span>
        </div>
      </div>
    </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="rounded-xl p-6">
              <div className="relative w-[356px]  h-64 bg-slate-800">
                <Image src={scroll} alt="Gizmo Hub product" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

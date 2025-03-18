"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import BannerCarousel from "../../../../public/assets/BannerCarousel.png";
import BannerCarousel1 from "../../../../public/assets/BannerCarousel1.svg";
import bannerCarousel2 from "../../../../public/assets/bannerCarousel2.svg";
import demo2 from "../../../../public/assets/demo2.jpg";
import BannerBgImage from "../../../../public/assets/BannerBgimage.svg";
import BannerBgImage2 from "../../../../public/assets/bannerImage2.svg";
import BannerBgImage3 from "../../../../public/assets/bannerImage3.svg";
import ArrowRight from "../../../../public/assets/arrow-right.png";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    { src: BannerCarousel, alt: "Product view 2" },
    { src: BannerCarousel, alt: "Product view 2" },
    { src: BannerCarousel, alt: "Product view 2" },
  ];

  const backgroundImages = [
    BannerBgImage.src,
    BannerBgImage2.src,
    BannerBgImage3.src,
  ];

  useEffect(() => {
    backgroundImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(currentSlide);
      setTransitioning(true);
      setCurrentSlide((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );

      const transitionTimeout = setTimeout(() => {
        setTransitioning(false);
      }, 1000);

      return () => clearTimeout(transitionTimeout);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, backgroundImages.length]);

  const handleSlideChange = (index) => {
    if (index !== currentSlide) {
      setPrevSlide(currentSlide);
      setTransitioning(true);
      setCurrentSlide(index);

      setTimeout(() => {
        setTransitioning(false);
      }, 1000);
    }
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[prevSlide]})`,
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentSlide]})`,
          opacity: 1,
        }}
      />
      <div className="w-full mx-auto relative px-[24px] sm:px-[24px] md:px-[45px] xl:px-[120px] py-[96.5] z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2.5 justify-center md:justify-start ">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === index
                    ? "bg-gradient-to-t from-[#704EB5] to-[#D2BCFF]"
                    : "bg-[#D2BCFF] hover:bg-[#B68EFF]"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex flex-col text-center md:text-start items-center md:items-start w-full max-w-[481px] ">
              <h1 className="lg:text-[80px] md:text-[64px] text-[48px] font-[400] text-[#222222]">
                Gizmo Hub
              </h1>
              <p className="lg:text-[20px] md-text-[17px] text-[14px] font-[400] tracking-[3px] text-[#9E6EFF]">
                ELECTRONICS & GADGETS
              </p>
              <p className="text-[#4E4E4E] md:text-[14px] text-[12px] leading-[166%] font-[400] max-w-lg mt-3">
                Stay ahead with the latest tech! From smart gadgets to
                cutting-edge accessories, Gizmo Hub brings you the future of
                technology. Discover premium products at the innovation at your
                fingertips!
              </p>
              <button
                className={`group relative flex items-center justify-center gap-2 rounded-full px-[20px] py-2 text-white transition-all duration-300
    bg-gradient-to-b from-[#BE9EFF] to-[#704EB5]
    shadow-[0px_1px_2px_rgba(0,0,0,0.2),0px_4px_4px_rgba(0,0,0,0.2)]
    hover:shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_4px_4px_rgba(0,0,0,0.3)]
    lg:max-w-[187px] md:max-w-[172px] max-w-[157px] mt-[25px] w-full`}
              >
                <span className="lg:text-[18px] md:text-[16px] text-[14px] font-medium">
                  Explore Store
                </span>
                <Image
                  src={ArrowRight || "/placeholder.svg"}
                  alt="Arrow right"
                  width={24}
                  height={24}
                />
              </button>

              <div className="relative hidden md:block h-[217px] bg-white/50 backdrop-blur-[38.5px] shadow-lg rounded-[22px] p-6 mt-9">
                <p className="text-[#000000] font-[600] text-[26px] h-[36px] flex items-center gap-[5px]">
                  +150{" "}
                  <span className="text-sm font-[400] text-[#4E4E4E]">
                    Testimonials
                  </span>
                </p>

                <p className="text-[20px] font-[500] text-[#222222] mt-2">
                  This Thing is Built So Well! Super Smooth Feel, Totally Worth
                  It!
                </p>

                <div className="flex items-center justify-between mt-4 ">
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

                  <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6 fill-red-500 text-red-500" />
                    <span className="text-lg text-gray-600">50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end ">
            <div className="flex md:flex-row flex-col md:gap-4 gap-[0px] ">
              <div className="relative w-[231px] h-[300px] md:w-[356px] md:h-[440px] ">
                <Image
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex flex-row md:flex-col justify-center md:gap-2 ">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative w-[55px] h-[70px]  cursor-pointer border-2   ${selectedImage === index
                      ? "border-none"
                      : "border-transparent"
                      }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

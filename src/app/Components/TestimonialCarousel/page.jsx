"use client";

import { useState, useEffect, use } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Ellipse from "../../../../public/assets/Ellipse.svg";
import UserImg from "../../../../public/assets/bannerUser3.svg";


const testimonials = Array(10)
  .fill(null)
  .map((_, index) => ({
    name: `Jacob Paul`,
    rating: 4.8,
    daysAgo: 1 + (index % 30),
    text: "Stay ahead with the latest tech! From smart gadgets to cutting-edge accessories, GizmoHub brings you top-quality electronics for every need. Upgrade your lifestyle with innovation at your fingertips!.",
  }));

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [products, setProducts] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const productEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENT_DELIVERY_ACCESS_TOKEN}`


  async function fetchProducts() {
    const response = await fetch(productEndpoint);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    async function getProducts() {
      const data = await fetchProducts();
      setProducts(data.items || []);
    }
    getProducts();
  }, []);

  const desktopCardWidth = 552;
  const cardSpacing = 570;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 660);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleDragStart = (e) => {
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    setDeltaX(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    const threshold = 100;
    if (deltaX > threshold) {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else if (deltaX < -threshold) {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
    setIsDragging(false);
    setDeltaX(0);
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      <h2 className="text-[24px]  z-20 absolute left-0 right-0 md:text-[40px] 
        font-[poppins] font-normal text-center bg-gradient-to-r from-[#BE9EFF]
         to-[#704EB5] bg-clip-text text-transparent">
        Testimonials
      </h2>


      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="relative">

          {!isMobile && (
            <div className="max-w-[660px] mt-10 w-full lg:flex hidden justify-between items-center absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="flex justify-center cursor-pointer items-center bg-white rounded-full shadow-md h-12 w-12"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </div>
              <div
                className="flex justify-center cursor-pointer items-center bg-white rounded-full shadow-md h-12 w-12"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </div>
            </div>
          )}

          {isMobile ? (
            <div className="overflow-hidden mt-10">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {products.map((product, index) => (
                  // const { fields } = product;
                  <div key={index} className="w-full h-[400px] flex-shrink-0 px-2 relative">
                    {activeIndex === index && (
                      <div className="absolute left-0 inset-0 flex justify-center items-center pointer-events-none z-0">
                        <Image
                          src={Ellipse}
                          alt="Active Card Shadow"
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div
                      className={`bg-white rounded-3xl shadow-xl p-6 relative z-10 transition-all duration-300 ${activeIndex === index
                        ? "shadow-[0_0_25px_rgba(112,78,181,0.4)] opacity-100 scale-100"
                        : "shadow-md opacity-70 scale-95"
                        }`}
                    >
                      <h3 className="text-xl font-[poppins] font-medium mb-4">
                        {product.fields?.productName || "Product Name"}
                      </h3>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-[#f0f8ff]">
                          <Image src={product?.avatar || UserImg} alt={product?.name || "User"} />
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium font-[poppins] mr-2">
                            {product?.fields.profileName || "User Name"}
                          </span>
                          <span className="text-sm font-[poppins]">
                            {product?.fields.rating || "4.8"}
                          </span>
                          <span className="text-yellow-400 ml-1">★</span>
                        </div>
                      </div>
                      <p className="text-gray-600 font-[inter] text-sm">
                        {product?.fields.description || "Product review text goes here."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 w-3 mx-1 rounded-full 
                      ${activeIndex === index ? "bg-[#9370DB]" : "bg-[#d8c8ff]"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div
              className="relative w-full h-[400px]"
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div className="absolute w-full mt-10 h-full flex items-center justify-center">
                {products.map((product, index) => {
                  const { fields } = product;
                  let distance = index - activeIndex;
                  const totalSlides = products.length;
                  if (distance > totalSlides / 2) {
                    distance -= totalSlides;
                  } else if (distance < -totalSlides / 2) {
                    distance += totalSlides;
                  }
                  const xPos = distance * 570 + (isDragging ? deltaX : 0);
                  return (
                    <div
                      key={product.sys.id}
                      className="absolute transition-all duration-300"
                      style={{
                        transform: `translateX(${xPos}px)`,
                        transformOrigin: "left center",
                        zIndex: distance === 0 ? 10 : 5,
                        opacity: Math.abs(distance) <= 2 ? 1 : 0,
                        width: 552,
                      }}
                    >
                      <div className="relative">
                        {distance === 0 && (
                          <div className="absolute top-0 left-0 inset-0 flex justify-center items-center pointer-events-none">
                            <Image src={Ellipse} alt="Active Card Shadow" className="object-contain" />
                          </div>
                        )}
                        <div
                          className={`relative z-10 mx-auto backdrop-blur-3xl bg-white rounded-3xl p-6 transition-all duration-300 ${distance === 0
                              ? "shadow-[0_0_25px_rgba(112,78,181,0.4)] opacity-100 !bg-[#F5F1FF] flex justify-center flex-col !w-[552px] h-[261px]"
                              : "shadow-md opacity-70 w-full max-w-[428px]"
                            }`}
                        >
                          <div className="flex flex-col">
                            <h3 className="text-[25px] font-[poppins] font-normal ">
                              {fields?.productName || "Product Name"}
                            </h3>
                            <h5 className="text-sm text-[#6B6B6B] font-[poppins] font-normal mb-4">
                              {fields?.storeName || "Store Name"}
                            </h5>
                          </div>
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-[#f0f8ff]">
                              <Image src={fields?.avatar || UserImg} alt={fields?.name || "User"} />
                            </div>
                            <div className="flex items-center">
                              <span className="text-[20px] font-[poppins] font-normal mr-2">
                                {fields?.profileName || "User Name"}
                              </span>
                              <span className="text-[16px] font-[inter] font-normal">
                                {fields?.rating || "4.8"}
                              </span>
                              <span className="text-yellow-400 ml-1">★</span>
                            </div>
                          </div>
                          <p className="text-gray-600 truncate max-w-[900px]  font-[inter] text-sm">
                            {fields?.description || "Product review text goes here."}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );

}

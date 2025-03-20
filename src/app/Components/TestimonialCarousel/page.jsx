"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Ellipse from '../../../../public/assets/Ellipse.svg'

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef(null)

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const testimonials = [
    {
      id: 1,
      productName: "Product Name",
      name: "John Smith",
      rating: 4.8,
      avatar: "/placeholder.svg?height=60&width=60",
      text: "Stay ahead with the latest tech! From smart gadgets to cutting-edge accessories, GizmoHub brings you top-quality electronics for every need. Upgrade your lifestyle with innovation at your fingertips!",
    },
    {
      id: 2,
      productName: "Product Name",
      name: "John Smith",
      rating: 4.8,
      avatar: "/placeholder.svg?height=60&width=60",
      text: "Stay ahead with the latest tech! From smart gadgets to cutting-edge accessories, GizmoHub brings you top-quality electronics for every need. Upgrade your lifestyle with innovation at your fingertips!",
    },
    {
      id: 3,
      productName: "Product Name",
      name: "John Smith",
      rating: 4.8,
      avatar: "/placeholder.svg?height=60&width=60",
      text: "Stay ahead with the latest tech! From smart gadgets to cutting-edge accessories, GizmoHub brings you top-quality electronics for every need. Upgrade your lifestyle with innovation at your fingertips!",
    },
    {
      id: 4,
      productName: "Product Name",
      name: "John Smith",
      rating: 4.8,
      avatar: "/placeholder.svg?height=60&width=60",
      text: "Stay ahead with the latest tech! From smart gadgets to cutting-edge accessories, GizmoHub brings you top-quality electronics for every need. Upgrade your lifestyle with innovation at your fingertips!",
    },
  ]

  // Helper function to get the correct index with wrapping
  const getWrappedIndex = (index) => {
    if (index < 0) return testimonials.length + (index % testimonials.length)
    return index % testimonials.length
  }

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  // Mouse and touch event handlers for scrolling
  const handleDragStart = (e) => {
    setIsDragging(true)
    setStartX(e.type === "touchstart" ? e.touches[0].clientX : e.clientX)
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    const currentX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX
    const diff = startX - currentX
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide()
      setIsDragging(false)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  // Create an expanded array for infinite scrolling display
  const getVisibleTestimonials = () => {
    const result = [...testimonials]
    // Duplicate for infinite looping
    for (let i = 0; i < testimonials.length; i++) {
      result.push(testimonials[i])
    }
    for (let i = testimonials.length - 1; i >= 0; i--) {
      result.unshift(testimonials[i])
    }
    return result
  }

  const visibleTestimonials = getVisibleTestimonials()
  // Calculate offset to ensure the active item is centered
  const offset = testimonials.length
  const adjustedActiveIndex = activeIndex + offset

  return (
    <div className="w-full  relative container mx-auto py-16 px-4">
      <div>
        <h2 className="text-[24px] z-20 absolute left-0 right-0 md:text-[40px] font-[poppins] font-normal text-center bg-gradient-to-r from-[#BE9EFF] to-[#704EB5] bg-clip-text text-transparent">
          Testimonials
        </h2>

        <div className="relative">
          {!isMobile && (
            <>
              <div
                className="absolute flex justify-center cursor-pointer items-center
                 xl:left-[440px] left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md h-12 w-12"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </div>
              <div
                className="absolute flex justify-center cursor-pointer items-center xl:right-[440px] right-[0px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md h-12 w-12"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </div>
            </>
          )}

          <div
            ref={carouselRef}
            className="overflow-hidden"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {isMobile ? (
              <div
                className="flex font-[poppins] transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => {
                  const isActive = index === adjustedActiveIndex
                 return (
                   <div
                    key={`mobile-${testimonial.id}-${index}`}
                    className="w-full  h-[300px] flex-shrink-0 px-2"
                  >

                    {isActive && (
                      <div className="absolute left-0 inset-0 flex justify-center items-center pointer-events-none z-0">
                        <Image
                          src={Ellipse}
                          alt="Active Card Shadow"

                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className={`bg-white rounded-3xl shadow-xl p-6 ${isActive
                            ? "shadow-[0_0_25px_rgba(112,78,181,0.4)] opacity-100 scale-100"
                            : "shadow-md opacity-70 scale-95"
                          }`}>
                      <h3 className="text-xl font-[poppins] font-medium mb-4">
                        {testimonial.productName}
                      </h3>

                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-[#f0f8ff]">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium font-[poppins] mr-2">
                            {testimonial.name}
                          </span>
                          <span className="text-sm font-[poppins]">{testimonial.rating}</span>
                          <span className="text-yellow-400 ml-1">★</span>
                        </div>
                      </div>

                      <p className="text-gray-600 font-[inter] text-sm">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                 ) 
                  
                })}
              </div>
            ) : (
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(calc(-${adjustedActiveIndex * 50}% + 25%))`,
                }}
              >
                {visibleTestimonials.map((testimonial, index) => {
                  const isActive = index === adjustedActiveIndex
                  return (
                    <div
                      key={`desktop-${testimonial.id}-${index}`}
                      className={` relative font-[poppins] w-1/2 flex items-center h-[400px] flex-shrink-0 px-2 md:px-4`}
                    >
                      {isActive && (
                        <div className="absolute left-0 inset-0 flex justify-center items-center pointer-events-none z-0">
                          <Image
                            src={Ellipse}
                            alt="Active Card Shadow"

                            className="object-contain"
                          />
                        </div>
                      )}

                      <div
                        className={`relative z-10 !w-[522px] mx-auto backdrop-blur-3xl bg-white rounded-3xl p-6 transition-all duration-300 ${isActive
                            ? "shadow-[0_0_25px_rgba(112,78,181,0.4)] opacity-100 scale-100   flex justify-center flex-col"
                            : "shadow-md opacity-70 scale-95"
                          }`}
                      >
                        <h3 className="text-xl font-medium mb-4">
                          {testimonial.productName}
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-[#f0f8ff]">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium mr-2">
                              {testimonial.name}
                            </span>
                            <span className="text-sm">
                              {testimonial.rating}
                            </span>
                            <span className="text-yellow-400 ml-1">★</span>
                          </div>
                        </div>

                        <p className="text-gray-600 font-[inter] text-sm">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {isMobile && (
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 mx-1 rounded-full ${index === activeIndex ? "bg-[#9370DB]" : "bg-[#d8c8ff]"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

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
      name: "John Smith",
      rating: 4.8,
      text: "Stay ahead with the latest tech! From smart gadgets to cutting-edge accessories, Gizmohub brings you top-quality electronics for every need. Upgrade your lifestyle with innovation at your fingertips!",
      productName: "Product Name",
    },
    {
      id: 2,
      name: "John",
      rating: 4.8,
      text: "Stay ahead with the latest tech! From smart gadgets to cutting-edge accessories, Gizmohub brings you top-quality electronics for every need. Upgrade your lifestyle with innovation at your fingertips!",
      productName: "Product Name",
    },
    {
      id: 3,
      name: "Johny",
      rating: 4.8,
      text: "Stay ahead with the latest tech! From smart gadgets to cutting-edge accessories, Gizmohub brings you top-quality electronics for every need. Upgrade your lifestyle with innovation at your fingertips!",
      productName: "Product Name",
    },
    {
      id: 4,
      name: "John Smith",
      rating: 4.8,
      text: "Stay ahead with the latest tech! From smart gadgets to cutting-edge accessories, Gizmohub brings you top-quality electronics for every need. Upgrade your lifestyle with innovation at your fingertips!",
      productName: "Product Name",
    },
  ]

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[activeIndex]]
    }

    const prev = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
    const next = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1

    return [testimonials[prev], testimonials[activeIndex], testimonials[next]]
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <div className="w-full mx-auto px-4 py-12 relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600">Testimonials</h2>
      </div>

      <div className="relative ">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 rounded-xl opacity-50"></div>

        <div className="relative flex items-center justify-center py-8 ">
          <button
            variant="ghost"
            size="icon"
            className="absolute left-0 md:left-4 z-10 bg-white/80 hover:bg-white rounded-full shadow-md"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </button>

          <div className="flex justify-center items-center gap-4 md:gap-6 w-full overflow-hidden px-4 bg-green-300 ">
            {visibleTestimonials.map((testimonial, index) => {
              const isActive = !isMobile && index === 1

              return (
                <div
                  key={testimonial.id}
                  className={`
                    transition-all duration-300 ease-in-out
                    ${isActive || isMobile ? "w-full md:w-[552px] z-10 scale-100 opacity-100" : "w-[250px] scale-90 opacity-60"}
                    ${isActive || isMobile ? "bg-white shadow-lg" : "bg-white/80"}
                    rounded-lg p-4 md:p-6 flex flex-col
                    
                  `}
                >
                  <div className="text-center mb-2">
                    <p className="text-sm md:text-base font-medium text-gray-600">{testimonial.productName}</p>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-purple-100">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-1">{testimonial.rating}</span>
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-4">{testimonial.text}</p>
                </div>
              )
            })}
          </div>

          <button
            variant="ghost"
            size="icon"
            className="absolute right-0 md:right-4 z-10 bg-white/80 hover:bg-white rounded-full shadow-md"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
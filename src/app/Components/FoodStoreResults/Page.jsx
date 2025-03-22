"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ChevronDown,
  ChevronLeftIcon,
  ChevronRightIcon,
  Star,
} from "lucide-react"
import productImage from "../../../../public/assets/Rectangle 39.png"
import { useState } from "react"

export default function FoodStoreResults() {
  const [selectedStore, setSelectedStore] = useState("")
  const [selectedDropdown1, setSelectedDropdown1] = useState("")
  const [selectedDropdown2, setSelectedDropdown2] = useState("")
  const [selectedDropdown3, setSelectedDropdown3] = useState("")

  // Dropdown configurations
  const dropdowns = [
    {
      id: "store",
      value: selectedStore,
      setValue: setSelectedStore,
      options: [
        { value: "", label: "Food Store" },
        { value: "restaurant", label: "Restaurant" },
        { value: "grocery", label: "Grocery Store" },
        { value: "cafe", label: "Café" },
      ],
    },
    {
      id: "dropdown1",
      value: selectedDropdown1,
      setValue: setSelectedDropdown1,
      options: [
        { value: "", label: "Select Sub-Categories" },
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ],
    },
    {
      id: "dropdown2",
      value: selectedDropdown2,
      setValue: setSelectedDropdown2,
      options: [
        { value: "", label: "Stock Availability" },
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ],
    },
    {
      id: "dropdown3",
      value: selectedDropdown3,
      setValue: setSelectedDropdown3,
      options: [
        { value: "", label: "Customer Ratings" },
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ],
    },
  ]

  const stores = [
    {
      id: 1,
      name: "Store Name",
      location: "Town, City",
      rating: 4.8,
      description:
        "Store Description, Store Description, Store Description, Store Description, Show more...",
      image: productImage,
    },
    {
      id: 2,
      name: "Store Name",
      location: "Town, City",
      rating: 4.8,
      description:
        "Store Description, Store Description, Store Description, Store Description, Show more...",
      image: productImage,
    },
    {
      id: 3,
      name: "Store Name",
      location: "Town, City",
      rating: 4.8,
      description:
        "Store Description, Store Description, Store Description, Store Description, Show more...",
      image: productImage,
    },
    {
      id: 4,
      name: "Store Name",
      location: "Town, City",
      rating: 4.8,
      description:
        "Store Description, Store Description, Store Description, Store Description, Show more...",
      image: productImage,
    },
    {
      id: 5,
      name: "Store Name",
      location: "Town, City",
      rating: 4.8,
      description:
        "Store Description, Store Description, Store Description, Store Description, Show more...",
      image: productImage,
    },
    {
      id: 6,
      name: "Store Name",
      location: "Town, City",
      rating: 4.8,
      description:
        "Store Description, Store Description, Store Description, Store Description, Show more...",
      image: productImage,
    },
  ]

  return (
    <>
      {/* Dropdowns */}
      <div className="flex items-center justify-center flex-wrap gap-[30.67px] mt-4">
        {dropdowns.map((dropdown) => (
          <div key={dropdown.id} className="relative inline-block">
            <select
              value={dropdown.value}
              onChange={(e) => dropdown.setValue(e.target.value)}
              className="
                w-[256px]
                px-4
                py-2
                pr-10
                rounded-full
                bg-[#F8F8F8]
                text-[#999999]
                border border-transparent
                appearance-none
                bg-no-repeat
                cursor-pointer
                outline-none
                transition-colors
                duration-200
                font-[poppins]
                focus:border-[#7C3AED]
                focus:ring-1
                focus:ring-[#7C3AED]
                focus:ring-offset-0
              "
            >
              {dropdown.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Single ChevronDown icon */}
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4E4E4E] pointer-events-none"
              size={12}
            />
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="container mx-auto py-8 sm:py-[29px] px-[24px] sm:px-[24px] md:px-[45px] flex flex-col items-center md:items-stretch">
        <div className="flex flex-col items-start mx-auto">
          <h1 className="text-[18px] font-[poppins] font-[400] mb-6 text-[#4E4E4E]">
            Results For: Food Store
          </h1>
          <div className="grid grid-cols-1 font-[poppins] place-items-center md:grid-cols-2 lg:grid-cols-3 gap-[73px]">
            {stores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <Pagination />
        </div>
      </div>
    </>
  )
}

/* Button, StoreCard, and Pagination remain the same as before */

function Button({ children, className, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        } ${className}`}
    >
      {children}
    </button>
  )
}

function StoreCard({ store }) {
  return (
    <div className="bg-white max-w-[349px]  rounded-[18px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="relative h-48 w-full">
        <Image
          src={store.image || "/placeholder.svg"}
          alt={store.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="ml-[25px] mr-[25px] mb-[15px]">
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-[24px] font-[400]">{store.name}</h2>
              <p className="text-[12px] text-[#4E4E4E]">{store.location}</p>
            </div>
            <div className="flex items-center">
              <span className="mr-1 text-[14px] text-[#4E4E4E]">
                {store.rating}
              </span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
          <p className="mt-[5px] text-[14px] text-[#4E4E4E]">
            {store.description.split(",").slice(0, 4).join(", ")}
            <Link href="#" className="text-[#4E4E4E] hover:underline ml-1">
              Show more...
            </Link>
          </p>
        </div>
        <div className="w-full p-[2px] rounded-full bg-gradient-to-b from-[#BE9EFF] to-[#704EB5]">
          <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-full py-2">
            Explore Store
          </button>
        </div>
      </div>
    </div>
  )
}

function Pagination() {
  const pages = [1, 2, 3, 4, 5]
  const currentPage = 1

  return (
    <div className="flex items-center justify-between w-[345px] md:w-[531px] h-[53px] bg-[#FEFEFE] shadow-md rounded-full px-[30px] border border-[#F5F1FF]">
      <Button
        className="flex items-center text-gray-700 hover:text-purple-600"
        disabled={currentPage === 1}
      >
        <span className="text-sm hidden font-[poppins] md:flex">
          <ChevronLeftIcon className="w-5 h-5" /> Previous
        </span>
      </Button>
      <div className="flex gap-2">
        {pages.map((page) => (
          <button
            key={page}
            className={`w-8 h-8 p-0 flex items-center justify-center rounded-full text-sm font-medium transition-all ${currentPage === page
                ? "border border-purple-600"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="flex items-center text-gray-700 hover:text-purple-600"
        disabled={currentPage === pages.length}
      >
        <span className="text-sm hidden font-[poppins] md:flex">
          Next <ChevronRightIcon className="w-5 h-5" />
        </span>
      </button>
    </div>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import productImage from "../../../../public/assets/Rectangle 39.png"

export default function FoodStoreResults() {

  const stores = [
    {
      id: 1,
      name: "Store Name",
      location: "Town, City",
      rating: 4.8,
      description: "Store Description, Store Description, Store Description, Store Description, Show more...",
      image: productImage,
    },
    {
      id: 2,
      name: "Store Name",
      location: "Town, City",
      rating: 4.8,
      description: "Store Description, Store Description, Store Description, Store Description, Show more...",
      image: productImage,
    },
    {
      id: 3,
      name: "Store Name",
      location: "Town, City",
      rating: 4.8,
      description: "Store Description, Store Description, Store Description, Store Description, Show more...",
      image: productImage,
    },
    {
      id: 4,
      name: "Store Name",
      location: "Town, City",
      rating: 4.8,
      description: "Store Description, Store Description, Store Description, Store Description, Show more...",
      image: productImage,
    },
    {
      id: 5,
      name: "Store Name",
      location: "Town, City",
      rating: 4.8,
      description: "Store Description, Store Description, Store Description, Store Description, Show more...",
      image: productImage,
    },
    {
      id: 6,
      name: "Store Name",
      location: "Town, City",
      rating: 4.8,
      description: "Store Description, Store Description, Store Description, Store Description, Show more...",
      image: productImage,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Results For: Food Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <Pagination />
      </div>
    </div>
  )
}

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
    <div className="bg-white rounded-[18px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="relative h-48 w-full">
        <Image src={store.image || "/placeholder.svg"} alt={store.name} fill className="object-cover" />
      </div>
      <div className="ml-[25px] mr-[25px] mb-[15px]">

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold">{store.name}</h2>
            <p className="text-sm text-gray-500">{store.location}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-1 font-medium">{store.rating}</span>
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-700">
          Store Description, Store Description, Store Description, Store Description,
          <Link href="#" className="text-blue-500 hover:underline ml-1">
            Show more...
          </Link>
        </p>
      </div>
      <div className="w-full p-[2px] rounded-full bg-gradient-to-b from-[#BE9EFF] to-[#704EB5]">
        <Button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-full">
          Explore Store
        </Button>
      </div>

      </div>

    </div>
  )
}

function Pagination() {
  const pages = [1, 2, 3, 4, 5]
  const currentPage = 1

  return (
    <div className="flex items-center gap-2">
      <Button
        className="flex items-center gap-1 px-3 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        disabled={currentPage === 1}
      >
        <span className="text-sm">Previous</span>
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          className={`w-8 h-8 p-0 flex items-center justify-center ${currentPage === page
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
        >
          {page}
        </Button>
      ))}

      <Button
        className="flex items-center gap-1 px-3 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        disabled={currentPage === pages.length}
      >
        <span className="text-sm">Next</span>
      </Button>
    </div>
  )
}
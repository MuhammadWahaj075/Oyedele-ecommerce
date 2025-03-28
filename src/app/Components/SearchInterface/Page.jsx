"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
export default function SearchInterface() {
    const [searchType, setSearchType] = useState("store")
    const [selectedStore, setSelectedStore] = useState("")
    const [selectedTown, setSelectedTown] = useState("")
    const [selectedCity, setSelectedCity] = useState("")
    return (
        <div className="mt-6 w-full flex flex-col items-center justify-center p-4">
            <div className="w-full mx-auto space-y-8 bg-red/700">
                <div className="w-full ">
                    <h1 className="font-[poppins] text-2xl md:text-[40px] text-center font-[400] text-[#8B5CF6] mb-8">
                        What Are You Looking For?
                    </h1>
                </div>
                <div className=" flex items-center px-3  gap-[10px] h-[52px] md:h-[70px] bg-[#FEFEFE] rounded-full w-full max-w-[379px] mx-auto shadow-inner shadow-black/20">
                    <button
                        onClick={() => setSearchType("store")}
                        className={`w-[113px] h-[36px] md:w-[138px] md:h-[43px] font-[poppins] rounded-full text-[12px] md:text-base transition-all ${searchType === "store"
                            ? "bg-gradient-to-b from-[#BE9EFF] to-[#704EB5] text-white shadow-[inset_0_1px_6.1px_0_rgba(0,0,0,0.2)]"
                            : "text-gray-600 hover:text-gray-800"
                            }`}
                    >
                        Store Search
                    </button>

                    <button
                        onClick={() => setSearchType("service")}
                        className={`flex-1 w-[163px] h-[36px] md:!w-[205px] md:h-[43px] font-[poppins] bg-[#ECECEC] rounded-full text-[12px] md:text-base transition-all ${searchType === "service"
                            ? "bg-[#8B5CF6] text-white shadow-[inset_0_1px_6.1px_0_rgba(0,0,0,0.2)]"
                            : "text-gray-600 hover:text-gray-800"
                            }`}
                    >
                        Service-Store Search
                    </button>
                </div>
                <div className="space-y-4 w-[276] m-auto ">
                    <div className="relative">
                        <select
                            value={selectedStore}
                            onChange={(e) => setSelectedStore(e.target.value)}
                            className="w-full h-[39px]  font-[poppins] px-[15px] rounded-3xl border-2 border-[#8B5CF6]  appearance-none bg-white text-gray-700 cursor-pointer focus:outline-none focus:border-[#7C3AED]"
                        >
                            <option value="">Food Store</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="grocery">Grocery Store</option>
                            <option value="cafe">Café</option>
                        </select>
                        <ChevronDown
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8B5CF6] pointer-events-none"
                            size={20}
                        />
                    </div>
                    <div className="relative ">
                        <select
                            value={selectedTown}
                            onChange={(e) => setSelectedTown(e.target.value)}
                            className="px-[15px] w-full font-[poppins] !h-[39px] bg-gray-100 rounded-3xl appearance-none text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                        >
                            <option value="">Select Store Town</option>
                            <option value="town1">Town 1</option>
                            <option value="town2">Town 2</option>
                            <option value="town3">Town 3</option>
                        </select>
                        <ChevronDown
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={20}
                        />
                    </div>
                    <div className="relative">
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="w-full  !h-[39px] font-[poppins] px-[15px] rounded-3xl bg-gray-100  appearance-none text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                        >
                            <option value="">Select Store City</option>
                            <option value="city1">City 1</option>
                            <option value="city2">City 2</option>
                            <option value="city3">City 3</option>
                        </select>
                        <ChevronDown
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={20}
                        />
                    </div>
                </div>
                <div className="max-w-[99px] p-[2px] rounded-full bg-gradient-to-b from-[#BE9EFF] to-[#704EB5] mx-auto">
                    <button className="w-[95px] h-[39px] font-[poppins] bg-white hover:bg-purple-200 text-purple-600 rounded-full py-2">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
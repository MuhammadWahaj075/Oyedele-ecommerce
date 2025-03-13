import Image from "next/image";
import FoodStoreResults from "./Components/FoodStoreResults/Page"
import SearchInterface from "./Components/SearchInterface/Page";
import Banner from "./Components/Banner/page";
import TestimonialCarousel from "./Components/TestimonialCarousel/page";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Banner />
        {/* <SearchInterface /> */}
        <FoodStoreResults />
        <TestimonialCarousel />
      
      </main>
    </div>
  );
}

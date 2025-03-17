import Image from "next/image";
import FoodStoreResults from "./Components/FoodStoreResults/Page"
import SearchInterface from "./Components/SearchInterface/Page";
import Banner from "./Components/Banner/page";
import Testimonials from "./Components/TestimonialCarousel/page";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <SearchInterface />
        <FoodStoreResults />
        <Testimonials />
      
      </main>
    </div>
  );
}

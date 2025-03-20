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
        <div className="w-full h-px bg-[#E9E9E9] my-8"></div>
        <FoodStoreResults />
        <Testimonials />
      
      </main>
    </div>
  );
}

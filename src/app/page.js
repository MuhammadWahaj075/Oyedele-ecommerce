'use client'

import FoodStoreResults from "./Components/FoodStoreResults/Page"
import SearchInterface from "./Components/SearchInterface/Page";
import Banner from "./Components/Banner/page";
import Testimonials from "./Components/TestimonialCarousel/page";
import { ApolloProvider } from "@apollo/client";
import client from '../apollo/client'

export default function Home() {
  return (
    <div>
      <main>
      <ApolloProvider client={client}>
        <Banner />
        <SearchInterface />
        <div className="w-full h-px bg-[#E9E9E9] my-8"></div>
        <FoodStoreResults />
        <Testimonials />
      </ApolloProvider>
      </main>
    </div>
  );
}

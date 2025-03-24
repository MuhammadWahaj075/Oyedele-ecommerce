'use client'

import { ApolloProvider } from "@apollo/client";
import SearchInterface from "./components/SearchInterface/Page";
import Testimonials from "./components/TestimonialCarousel/page";
import Banner from "./components/Banner/page";
import client from '../apollo/client'
import FoodStoreResults from "./components/FoodStoreResults/Page";

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

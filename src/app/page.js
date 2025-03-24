'use client'

import dynamic from "next/dynamic";
import { ApolloProvider } from "@apollo/client";

import SearchInterface from "./Components/SearchInterface/Page";
import Banner from "./Components/Banner/page";
import client from '../apollo/client'
import FoodStoreResults from "./Components/FoodStoreResults/Page";

const Testimonials = dynamic(
  () => import("./Components/TestimonialCarousel/page"),
  { ssr: false }
);

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

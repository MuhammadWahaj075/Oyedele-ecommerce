'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    rating: '4.8 ⭐',
    text: 'Stay ahead with the latest tech! From smart gadgets to cutting-edge accessories, GizmoHub brings you top-quality electronics for every need. Upgrade your lifestyle with innovation at your fingertips!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: '5.0 ⭐',
    text: 'GizmoHub changed my shopping experience! The quality and service are unmatched. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 3,
    name: 'Mike Davis',
    rating: '4.7 ⭐',
    text: 'Amazing products with top-notch customer support. Would buy again!',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 sm:px-8 md:px-16 lg:px-32">
      <h2 className="text-3xl font-semibold text-purple-600 mb-6">Testimonials</h2>
      <div className="relative w-full max-w-2xl p-6 text-center shadow-lg rounded-2xl bg-white">
        <div className="flex justify-center mb-4">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-14 h-14 rounded-full border-2 border-purple-500"
          />
        </div>
        <h3 className="text-xl font-bold">{testimonials[current].name}</h3>
        <p className="text-gray-600 text-sm mb-2">{testimonials[current].rating}</p>
        <p className="text-gray-700">{testimonials[current].text}</p>
      </div>
      <div className="flex justify-between w-full max-w-2xl mt-4">
        <button
          onClick={prevTestimonial}
          className="bg-purple-500 text-white p-2 rounded-full shadow-md hover:bg-purple-700"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-purple-500 text-white p-2 rounded-full shadow-md hover:bg-purple-700"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-colors ${current === index ? 'bg-purple-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}
"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "../Card/card";
import { useState } from "react";

const testimonials = [
  {
    name: "Sydney Payne",
    rating: 5,
    text: "We absolutely love it here and are so lucky to have found Jessaca! Our boxer/bully mix is hard to find a place for boarding because he is distrusting of strangers and doesn’t play well with others, but he does incredible here and I feel 100% at ease when he is staying. Jessaca “follows the rules” for each dog that she watches and for us that is very comforting since our a pup is a little more to deal with. He and his sister always come home exhausted from all their fun at Dogs Day Away! Would recommend even if you have to make the short drive from downtown Austin for your pups to have an amazing place to stay!",
  },
];

export const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="w-full lg:w-3/4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-[#e0bf85] mb-4">
          Happy Pets, Happy Parents
        </h2>
        <p>What our clients have to say about their experience</p>
      </div>

      <div className="relative">
        <Card className="bg-white/5 backdrop-blur-sm max-w-3xl mx-auto">
          <CardContent className="p-12">
            <div className="flex mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#e0bf85] text-[#e0bf85]"
                />
              ))}
            </div>

            <p className="text-xl italic mb-8">
              {testimonials[activeIndex].text}
            </p>

            <div className="flex flex-col items-center">
              <p className="font-semibold text-[#e0bf85] text-lg">
                {testimonials[activeIndex].name}
              </p>
            </div>
          </CardContent>
        </Card>

        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 
                   bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-[#e0bf85]" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 
                   bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-[#e0bf85]" />
        </button>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? "bg-[#e0bf85] w-6" : "bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

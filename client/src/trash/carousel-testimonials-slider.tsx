"use client";

import Image from "next/image";
import { imageLoader } from "@/lib/imageLoader";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial } from "@/types/testimonial";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialSliderProps) {
  return (
    <section className="w-full py-10">
      <div className="mx-auto lg:max-w-6xl px-3 text-center">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="flex">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="w-full md:basis-1/2 lg:basis-1/4 px-4"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border border-transparent hover:border-violet-500 transition-all duration-300">
                  <div className="w-24 h-24 mb-4">
                    <Image
                      loader={imageLoader}
                      src={testimonial.imgSrc}
                      alt={`Testimonial from ${testimonial.name}`}
                      className="rounded-full"
                      width={96}
                      height={96}
                      objectFit="cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-violet-600 text-sm mb-4">{testimonial.role}</p>

                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-500 text-sm text-center">
                    {testimonial.feedback}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-[-30px] top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-[-30px] top-1/2 -translate-y-1/2 fill-black" />
        </Carousel>
      </div>
    </section>
  );
}

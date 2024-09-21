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

export default function CarouselSlider({
  testimonials,
}: TestimonialSliderProps) {
  return (
    <>
      <section className="w-full py-4">
        <div className="mx-auto lg:max-w-6xl px-3">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 3000, 
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex flex-col px-4 py-5 sm:p-6">
                    <div className="relative w-full h-64 sm:h-80 lg:h-96">
                      <Image
                        loader={imageLoader}
                        className="object-cover rounded-lg"
                        layout="fill"
                        alt={`Image ${index + 1}`}
                        src={testimonial.imgSrc}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-30px] top-1/2 -translate-y-1/2 fill-black" />
            <CarouselNext className="absolute right-[-30px] top-1/2 -translate-y-1/2 fill-black" />
          </Carousel>
        </div>
      </section>
    </>
  );
}

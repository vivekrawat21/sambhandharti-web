import CarouselTestimonialSlider from "@/components/carousel-testimonials-slider";

const Testimonials = [
  {
    quote: "I've been using pagedone for a year now and it's made managing my finances so much easier.",
    name: "Ethan Miller",
    role: "Product Designer",
    imgSrc: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    feedback: "I've been using pagedone for a year now and it's made managing my finances so much easier."
  },
  {
    quote: "Thanks to pagedone, I feel more confident about my investment decisions than ever before.",
    name: "Emily Johnson",
    role: "Design Lead",
    imgSrc: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    feedback: "I've been using pagedone for a year now and it's made managing my finances so much easier."

  },
  {
    quote: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
    name: "Olivia Carter",
    role: "Sales Manager",
    imgSrc: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    feedback: "I've been using pagedone for a year now and it's made managing my finances so much easier."
  },
  {
    quote: "Pagedone is simply the best tool of investment in the market that anyone can ask for.",
    name: "Wyatt Turner",
    role: "CEO",
    imgSrc: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    feedback: "I've been using pagedone for a year now and it's made managing my finances so much easier."
  },
  {
    quote: "Pagedone is simply the best tool of investment in the market that anyone can ask for.",
    name: "Wyatt Turner",
    role: "CEO",
    imgSrc: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    feedback: "I've been using pagedone for a year now and it's made managing my finances so much easier."
  },
];

export default function Carousel({ className }: any) {
  return (
    <main className={`flex min-h-[60vh] items-center justify-between py-12 px-3 sm:py-24 sm:px-5 mx-5 relative pt-12 ${className}`}>
      <div className="container">
        <h1 className="ml-4 sm:ml-10 font-bold text-xl sm:text-4xl mb-4 text-violet-500">
          Testimonials
        </h1>
        <CarouselTestimonialSlider testimonials={Testimonials} />
      </div>
    </main>
  );
}

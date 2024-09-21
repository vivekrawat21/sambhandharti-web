import CarouselSlider from "@/components/carousel-img-slider";

const GalleryData = [
  {
    quote: "",
    name: "",
    role: "",
    imgSrc: "https://plus.unsplash.com/premium_photo-1669324357773-a1ca561a4b72?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    feedback: "",
  },
  {
    quote: "",
    name: "",
    role: "",
    imgSrc: "https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?q=80&w=2814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    feedback: "",
  },
  {
    quote: "",
    name: "",
    role: "",
    imgSrc: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    feedback: "",
  },
  {
    quote: "",
    name: "",
    role: "",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fHww",
    rating: 5,
    feedback: "",
  },
  {
    quote: "",
    name: "",
    role: "",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fHww",
    rating: 5,
    feedback: "",
  }
];

export default function Carousel({ className }: any) {
  return (
    <main
      className={`flex min-h-[60vh] items-center justify-between py-12 px-3 sm:py-24 sm:px-5 mx-5 relative pt-12 ${className}`}
    >
      {" "}
      <div className="container">
        <h1 className="ml-4 sm:ml-10 mt-10 lg:mt-0 font-bold text-xl sm:text-4xl mb-4 text-violet-500">
          Gallery
        </h1>
        <CarouselSlider testimonials={GalleryData} />
      </div>
    </main>
  );
}

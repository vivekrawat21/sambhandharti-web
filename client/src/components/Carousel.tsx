import CarouselSlider from "@/components/carousel-img-slider";

const GalleryData = [
    {
        quote: "",
        name: "",
        role: "",
        imgSrc: "https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/home%20page/CROUSEL%201ST%20PHOTO.jpg",
        rating: 5,
        feedback: "",
      },
    {
        quote: "",
        name: "",
        role: "",
        imgSrc: "https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/home%20page/CROUSEL%202ND%20PHOTO.jpg",
        rating: 5,
        feedback: "",
    },
    {
        quote: "",
        name: "",
        role: "",
        imgSrc: "https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/home%20page/CROUSEL%203RD%20PHOTO.jpg",
        rating: 5,
        feedback: "",
    },
    {
        quote: "",
        name: "",
        role: "",
        imgSrc: "https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/home%20page/CROUSEL%204TH%20PHOTO.jpg",
        rating: 5,
        feedback: "",
    },
    {
        quote: "",
        name: "",
        role: "",
        imgSrc: "https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/home%20page/CROUSEL%205TH%20PHOTO.jpg",
        rating: 5,
        feedback: "",
    },
    
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

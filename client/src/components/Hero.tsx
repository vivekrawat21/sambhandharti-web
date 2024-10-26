import Image from "next/image"
import Tooltip from "./tooltip"

export default function Hero({ className = "" }: { className?: string }) {
  return (
    <section className={`container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
            Transforming
            <span className="text-violet-500 px-2">Lives</span>, One Step at a Time
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Sambharndaharti is a platform dedicated to helping people in need,
            providing resources for education, women empowerment, and child
            safety. Join us on this mission to make the world a better place for
            everyone.
          </p>
          {/* <Tooltip /> */}
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto">
            <Image
              src="https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/home%20page/ABOUT%201st%20PHOTO.jpg"
              alt="Helping Hands"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

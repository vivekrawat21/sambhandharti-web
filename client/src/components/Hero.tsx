import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HeartHandshake, GraduationCap, Users } from "lucide-react"
import Link from "next/link"

export default function Hero({ className = "" }: { className?: string }) {
  return (
    <section className={`w-full ${className}`}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/20 rounded-full text-orange-700 dark:text-orange-300 text-sm font-medium mb-2">
              Connecting Humanity
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Empowering Lives Through{" "}
              <span className="text-orange-600 dark:text-orange-400">
                Education & Care
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Sambandharthi is dedicated to transforming lives through education,
              women empowerment, and child welfare programs. Together, we can create
              lasting change in our communities.
            </p>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start py-6">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Lives Impacted</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Education Centers</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Volunteers</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
                <Link href="/Donate">
                    <Button
                        size="lg"
                        className="bg-orange-600 hover:bg-orange-700/100 text-white dark:bg-orange-600 dark:hover:bg-orange-700/100 dark:text-white"
                    >
                        Donate Now
                    </Button>
                </Link>
                <Link href="/About">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-900/20"
                    >
                        Learn More
                    </Button>
                </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-orange-600/10 dark:bg-orange-400/10 rounded-2xl -rotate-2"></div>
              <Image
                src="https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/home%20page/ABOUT%201st%20PHOTO.jpg"
                alt="Children learning at a Sambandharthi education center"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-2xl shadow-xl object-cover rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

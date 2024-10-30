import { Card } from "@/components/ui/card"
import { Quote, HeartHandshake, User2 } from "lucide-react"

export default function FounderNote() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-100 dark:bg-orange-900/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

          <div className="relative p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-start">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-md" />
                  <div className="relative rounded-full border-4 border-white dark:border-gray-800 shadow-xl flex items-center justify-center w-32 h-32 sm:w-44 sm:h-44">
                    <User2 className="w-16 h-16 sm:w-24 sm:h-24 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Mrs. xyz
                  </h2>
                  <p className="text-orange-600 dark:text-orange-400 font-medium">
                    Founder
                  </p>
                </div>
                <HeartHandshake className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>

              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/20 rounded-full text-orange-700 dark:text-orange-300 text-sm font-medium">
                  Founder's Message
                </div>

                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-orange-600/20 dark:text-orange-400/20 flex-shrink-0" />
                    <p className="italic">
                      Twenty years ago, I witnessed the transformative power of education in my own community.
                      That experience sparked a vision that would become Sambandharthi - a bridge connecting
                      those who want to help with those who need it most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

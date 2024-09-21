import Image from "next/image";
import Link from "next/link";

const FounderNote = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <div className="shadow-sm rounded-lg p-8">
        <div className="md:flex md:items-center">
          <div className="md:flex-shrink-0">
            <Link href="/About"
            >
              <Image
                className="rounded-full"
                src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                alt="Founder's Photo"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <h2 className="text-2xl font-bold text-gray-900">Name</h2>
            <p className="mt-2 text-gray-600">
              As the founder of our company, my vision has always been to create
              meaningful, impactful products that solve real-world problems.
              This journey has been one of passion, commitment, and growth. I am
              excited to share this vision with you all.
            </p>
            <p className="mt-4 text-sm text-violet-500 italic">
              - Name, Founder & CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;

"use client";
import { cn } from "@/lib/utils";

export function CardDemo(props: { title: string; description: string ;})  {

   const {title , description} = props;
      return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://thaagamorg-eb-s3.s3.amazonaws.com/static/main/assets/images/recent-posts/Child_Education/EDUCATION4.webp)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExamM4bjNtdm56ZzB4bDNscGtsZ3ZidmVoeDR6bXZncG5tanJkdTBwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/jcRB9D1t8FPSUkudVy/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExamM4bjNtdm56ZzB4bDNscGtsZ3ZidmVoeDR6bXZncG5tanJkdTBwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/jcRB9D1t8FPSUkudVy/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
          
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
        {description}
          </p>
        </div>
      </div>
    </div>
  );
}

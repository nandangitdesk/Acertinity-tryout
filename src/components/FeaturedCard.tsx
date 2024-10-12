"use client";
import Link from "next/link";
import courseData from "../app/data/music_courses.json";
import { div } from "framer-motion/client";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  description: string;
  slug: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCard = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-black/[0.96] ">
      <div>
        <div className="text-center">
          <h2 className="text-base text-zinc-200 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-20 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
              </BackgroundGradient> 
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          className="bg-black border-[1px] rounded-md border-zinc-300/[20%] hover:border-zinc-300/[60%] px-4 py-4 transition-all duration-300"
          href={"/courses"}
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;

"use client"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];



const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-xl font-semibold text-zinc-400 tracking-wide">FEATURED WEBINARS</h2>
                <p className="text-4xl font-semibold tracking-wide text-zinc-200">Enhance your Musical Journey</p>
            </div>
            <div className="mt-10">

            <HoverEffect items={featuredWebinars.map(webinar=>(
                {
                    title:webinar.title,
                    description:webinar.description,
                    link:webinar.slug
                }
            ))} />
            </div>
            <div className="mt-10 text-center">
                <Link href={"/"} className="rounded-md bg-black border border-zinc-600 px-4 py-4 hover:border-zinc-300 transition-all duration-300">
                   View all webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars
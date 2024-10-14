import FeaturedCard from "@/components/FeaturedCard";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection"
import Instructors from "@/components/Instructors";
import MusicTestimonial from "@/components/MusicTestimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCard/>
        <WhyChooseUs/>
        <MusicTestimonial/>
        <UpcomingWebinars/>
        <Instructors/>
        <Footer/>
     </main>
  );
}

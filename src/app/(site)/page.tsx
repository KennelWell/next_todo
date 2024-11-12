
import { Navbar } from "@/src/components/page/Navbar";
import HeroSection from "@/src/components/page/HeroSection";
import ProjectSection from "@/src/components/page/ProjectSection";
import AboutSection from "@/src/components/page/AboutSection";
export default function Home() {
    return (
      <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      </>
    );
  }
  
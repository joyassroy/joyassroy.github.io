import AboutSection from "@/components/AboutSection";
import HeroSection from "../components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import AchievementsSection from "@/components/AchievementsSection";

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section (Coming soon) */}
      <AboutSection/>
      {/* 3. Skills Section (Coming soon) */}
      <SkillsSection />
      {/* 4. Projects Section (Coming soon) */}
      <ProjectsSection />
      <AchievementsSection></AchievementsSection>
      {/* 5. Contact Section (Coming soon) */}
      <ContactSection />
    </div>
  );
}
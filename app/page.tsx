import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import ScrollReveal from '@/components/ScrollReveal';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 lg:px-12">
        <HeroSection />
 
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
  )
}

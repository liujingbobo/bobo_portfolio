import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CommercialSection from '@/components/CommercialSection';
import GameJamSection from '@/components/GameJamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <CommercialSection />
      <GameJamSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

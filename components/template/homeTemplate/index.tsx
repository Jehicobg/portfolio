import AboutSection from "@/components/organisms/aboutSection";
import ExperienceSection from "@/components/organisms/experienceSection";
import Hero from "@/components/organisms/hero";

const HomeTemplate = () => {
  return (
    <div className="container m-auto px-26 flex gap-4">
      <Hero />
      <main className="lg:max-w-[52%]">
        <AboutSection />
        <ExperienceSection />
      </main>
    </div>
  );
};

export default HomeTemplate;

import AboutSection from "@/components/organisms/aboutSection";
import ExperienceSection from "@/components/organisms/experienceSection";
import Hero from "@/components/organisms/hero";
import ProjectSection from "@/components/organisms/projectSection";

const HomeTemplate = () => {
  return (
    <div className="lg:container m-auto px-6 py-12 lg:py-0 lg:px-26 md:px-12 md:py-16 flex flex-col lg:flex-row gap-4">
      <Hero />
      <main className="lg:max-w-[52%]">
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </main>
    </div>
  );
};

export default HomeTemplate;

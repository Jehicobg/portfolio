import ToggleTranslation from "@/components/atoms/toggleTranslation";
import AboutMe from "@/components/molecules/aboutMe";
import { generateNewRoute } from "@/core/utils";
import { useRouter, usePathname } from "next/navigation";

const AboutSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/es") ? "es" : "en";

  const onToggle = () => {
    const language = currentLang === "en" ? "es" : "en";
    router.push(generateNewRoute({ language, pathname }));
  };

  return (
    <section
      className="flex flex-col py-26 relative"
      id="about"
      aria-label="About me"
    >
      <ToggleTranslation onToggle={onToggle} currentLang={currentLang} />
      <AboutMe />
    </section>
  );
};

export default AboutSection;

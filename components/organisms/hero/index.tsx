import HeroContent from "@/components/molecules/heroContent";
import NavBar from "@/components/molecules/navBar";
import SocialMedia from "@/components/molecules/socialMedia";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("NavBar");
  const navItems = [
    { label: t("about"), hash: "#about" },
    { label: t("experiences"), hash: "#experiences" },
    { label: t("projects"), hash: "#projects" },
  ];

  return (
    <header className="lg:w-[48%] lg:py-26 lg:sticky top-0 max-h-screen flex flex-col justify-between">
      <div>
        <HeroContent />
        <NavBar items={navItems} />
      </div>

      <SocialMedia />
    </header>
  );
};

export default Hero;

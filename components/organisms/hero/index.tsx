import HeroContent from "@/components/molecules/heroContent";
import NavBar from "@/components/molecules/navBar";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("NavBar");
  const navItems = [
    { label: t("about"), hash: "#about" },
    { label: t("experience"), hash: "#experience" },
    { label: t("projects"), hash: "#projects" },
  ];

  return (
    <header className="lg:w-[48%] py-26 sticky top-0 max-h-screen">
      <HeroContent />
      <NavBar items={navItems} />
    </header>
  );
};

export default Hero;

import ExperienceItem from "@/components/molecules/experienceItem";
import { useTranslations } from "next-intl";
import { ExperienceItemData } from "@/components/molecules/experienceItem";
import HeaderSectionMobile from "@/components/atoms/headerSectionMobile";

const ExperienceSection = () => {
  const t = useTranslations("ExperienceSection");
  const t_nav = useTranslations("NavBar");
  const experiences = Object.values(
    t.raw("experiences")
  ) as ExperienceItemData[];

  return (
    <section id="experiences" className="py-8 lg:mb-26">
      <HeaderSectionMobile title={t_nav("experiences")} />
      <ol className="group/list">
        {experiences?.map((experience, index) => {
          return <ExperienceItem key={index} experience={experience} />;
        })}
      </ol>
    </section>
  );
};

export default ExperienceSection;

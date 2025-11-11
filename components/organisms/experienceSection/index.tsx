import HeaderSectionMobile from "@/components/atoms/headerSectionMobile";
import ExperienceItem, {
  ExperienceItemData,
} from "@/components/molecules/experienceItem";
import Resume from "@/components/molecules/resume";
import { useTranslations } from "next-intl";

const ExperienceSection = () => {
  const t = useTranslations("ExperienceSection");
  const t_nav = useTranslations("NavBar");
  const experiences = Object.values(
    t.raw("experiences")
  ) as ExperienceItemData[];

  return (
    <section id="experiences" className="py-8 lg:mb-26 w-full">
      <HeaderSectionMobile title={t_nav("experiences")} />
      
      <ol className="group/list">
        {experiences?.map((experience, index) => {
          return <ExperienceItem key={index} experience={experience} />;
        })}
      </ol>
      <Resume />
    </section>
  );
};

export default ExperienceSection;

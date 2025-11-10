import ExperienceItem from "@/components/molecules/experienceItem";
import { useTranslations } from "next-intl";
import { ExperienceItemData } from "@/components/molecules/experienceItem";

const ExperienceSection = () => {
  const t = useTranslations("ExperienceSection");
  const experiences = Object.values(
    t.raw("experiences")
  ) as ExperienceItemData[];

  return (
    <section id="experience">
      <ol className="group/list">
        {experiences?.map((experience, index) => {
          return <ExperienceItem key={index} experience={experience} />;
        })}
      </ol>
    </section>
  );
};

export default ExperienceSection;

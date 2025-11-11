import LinkAnimated from "@/components/atoms/linkAnimated";
import { useTranslations } from "next-intl";

const Resume = () => {
  const t = useTranslations("ExperienceSection");

  return (
    <div className="group cursor-pointer relative inline-block">
      <span className="font-inter inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 text-base">
        {t("resume.label")}
      </span>
      <LinkAnimated to={t("resume.link")} label="View portfolio" />
    </div>
  );
};

export default Resume;

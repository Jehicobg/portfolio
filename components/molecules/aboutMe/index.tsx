import Typography from "@/components/atoms/typography";
import { useTranslations } from "next-intl";
import HeaderSectionMobile from "@/components/atoms/headerSectionMobile";

const AboutMe = () => {
  const t_array = useTranslations().raw("AboutMe") as string[];
  const t_nav = useTranslations("NavBar");

  return (
    <>
      <HeaderSectionMobile title={t_nav("about")} />
      {t_array?.map((t) => {
        return (
          <Typography key={t} variant="p" className="mb-4 text-base!">
            {t}
          </Typography>
        );
      })}
    </>
  );
};

export default AboutMe;

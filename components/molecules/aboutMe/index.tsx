import Typography from "@/components/atoms/typography";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("AboutMe");
  return (
    <>
      <Typography variant="p">{t("firstPart")}</Typography>
      <Typography variant="p" className="mt-4">
        {t("secondPart")}
      </Typography>
      <Typography variant="p" className="mt-4">
        {t("thirdPart")}
      </Typography>
    </>
  );
};

export default AboutMe;

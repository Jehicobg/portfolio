import Typography from "@/components/atoms/typography";
import Link from "next/link";
import { useTranslations } from "next-intl";

const HeroContent = () => {
  const t = useTranslations("HeroContent");

  return (
    <>
      <Typography
        variant="h1"
        className="tracking-tight hover:text-slate-300 transition-all"
      >
        <Link href={"/"}>Jehicob Guerrero</Link>
      </Typography>
      <Typography variant="h2">{t("subtitle")}</Typography>
      <Typography variant="p" className="max-w-xs mt-4">
        {t("shortPharse")}
      </Typography>
    </>
  );
};

export default HeroContent;

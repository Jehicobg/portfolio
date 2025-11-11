import Card from "@/components/atoms/card";
import CardContent from "@/components/atoms/cardContent";
import HeaderCard from "@/components/atoms/headerCard";
import LinkAnimated from "@/components/atoms/linkAnimated";
import PeriodTime from "@/components/atoms/periodTime";
import ShadowCard from "@/components/atoms/shadowCard";
import Typography from "@/components/atoms/typography";
import ListBadges from "../listBadges";

export type ExperienceItemData = {
  period: string;
  title: string;
  content: string;
  company: string;
  link: string;
  badges: [];
};

interface ExperienceItemProps {
  experience: ExperienceItemData;
}

const ExperienceItem = ({
  experience: { period, title, company, content, badges, link },
}: ExperienceItemProps) => {
  return (
    <li className="mb-12 group relative">
      <ShadowCard />
      <Card reverseOnMobile={false}>
        <PeriodTime period={period} />
        <CardContent>
          <Typography variant="h3" className="group-hover:text-teal-300">
            <div className="mb-3">
              <HeaderCard title={title} company={company} />
              {link && <LinkAnimated to={link} label={title} />}
            </div>
          </Typography>
          <Typography variant="p">{content}</Typography>
          <ListBadges items={badges} />
        </CardContent>
      </Card>
    </li>
  );
};

export default ExperienceItem;

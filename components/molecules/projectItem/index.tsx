import Card from "@/components/atoms/card";
import CardContent from "@/components/atoms/cardContent";
import HeaderCard from "@/components/atoms/headerCard";
import LinkHeader from "@/components/atoms/linkHeader";
import ShadowCard from "@/components/atoms/shadowCard";
import Typography from "@/components/atoms/typography";
import ListBadges from "../listBadges";
import ImageHeader from "@/components/atoms/imageHeader";

export type ProjectItemData = {
  title: string;
  content: string;
  link: string;
  image: string;
  badges: [];
};

interface ProjectItemProps {
  project: ProjectItemData;
}

const ProjectItem = ({
  project: { title, content, badges, link, image },
}: ProjectItemProps) => {
  return (
    <li className="mb-12 group relative">
      <ShadowCard />
      <Card reverseOnMobile>
        <ImageHeader src={image} alt={title} />
        <CardContent>
          <Typography variant="h3" className="group-hover:text-teal-300">
            <div className="mb-3">
              <HeaderCard title={title} />
              {link && <LinkHeader to={link} />}
            </div>
          </Typography>
          <Typography variant="p">{content}</Typography>
          <ListBadges items={badges} />
        </CardContent>
      </Card>
    </li>
  );
};

export default ProjectItem;

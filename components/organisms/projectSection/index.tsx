import { useTranslations } from "next-intl";
import ProjectItem, {
  ProjectItemData,
} from "@/components/molecules/projectItem";
import HeaderSectionMobile from "@/components/atoms/headerSectionMobile";

const ProjectSection = () => {
  const t = useTranslations("ProjectsSection");
  const t_nav = useTranslations("NavBar");
  const projects = Object.values(t.raw("projects")) as ProjectItemData[];

  return (
    <section id="projects" className="lg:mb-26">
      <HeaderSectionMobile title={t_nav("projects")} />
      <ol className="group/list">
        {projects?.map((project, index) => {
          return <ProjectItem key={index} project={project} />;
        })}
      </ol>
    </section>
  );
};

export default ProjectSection;

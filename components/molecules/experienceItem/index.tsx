import Typography from "@/components/atoms/typography";
import { ArrowUpRight } from "lucide-react";

import ListBadges from "../listBadges";
import PeriodTime from "@/components/atoms/periodTime";
import Link from "next/link";

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
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="flex gap-4  rounded-2xl z-10  transition-all relative">
        <PeriodTime period={period} />
        <div className="w-3/3">
          <Typography variant="h3">
            <div className="mb-3">
              <span className="inline-block">{title}</span>
              <span> · </span>
              <span className="inline-block">{company}</span>
              {Link && (
                <Link
                  href={link ?? ""}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group-hover:text-teal-300"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <ArrowUpRight
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    width={16}
                  />
                </Link>
              )}
            </div>
          </Typography>
          <Typography variant="p">{content}</Typography>
          <ListBadges items={badges} />
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;

import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

const SocialMedia = () => {
  return (
    <ul
      className="flex items-center gap-4 ml-1 mt-8"
      aria-label="Social Media"
    >
      <li>
        <Link
          href={"https://github.com/Jehicobg"}
          target="_blank"
          rel="noreferrer noopener"
        >
          <SiGithub
            size={22}
            className="cursor-pointer hover:text-slate-200 transition-all"
          />
        </Link>
      </li>
      <li>
        <Link
          href={"https://www.linkedin.com/in/jehicob-guerrero/"}
          target="_blank"
          rel="noreferrer noopener"
        >
          <SiLinkedin
            size={22}
            className="cursor-pointer hover:text-slate-200 transition-all"
          />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;

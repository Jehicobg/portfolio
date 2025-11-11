import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface LinkAnimatedProps {
  to: string;
  label?: string;
}

const LinkAnimated = ({ to, label }: LinkAnimatedProps) => {
  return (
    <Link
      href={to ?? ""}
      target="_blank"
      rel="noreferrer noopener"
      className="group-hover:text-teal-300"
      title={to}
      aria-label={label}
    >
      <span
        className={`absolute -inset-x-4 -inset-y-2.5 block lg:hidden group-hover:block rounded md:-inset-x-6 md:-inset-y-"`}
      ></span>
      <ArrowUpRight
        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
        width={16}
      />
    </Link>
  );
};

export default LinkAnimated;

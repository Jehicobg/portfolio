import Link from "next/link";
import { usePathname } from "next/navigation";

interface LocaleHashLinkProps {
  hash: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: ({ hash }: { hash: string }) => void;
}

const LocaleHashLink = ({
  hash,
  children,
  isActive,
  onClick,
}: LocaleHashLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      className="group flex items-center py-3 group"
      href={`${pathname}${hash}`}
      scroll={true}
      onClick={() => onClick({ hash })}
    >
      <span
        className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
          isActive ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
        }`}
      />
      <span
        className={`text-xs font-inter font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
          isActive ? "text-slate-200" : "text-slate-500"
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

export default LocaleHashLink;

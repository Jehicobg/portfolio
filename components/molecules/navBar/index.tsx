import ItemNavBar from "@/components/atoms/itemNavBar";
import LocaleHashLink from "@/components/atoms/localeHashLink";
import { SECTIONS } from "@/core/utils";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { useEffect, useState } from "react";

interface NavBarProps {
  items: {
    label: string;
    hash: string;
  }[];
}

const NavBar = ({ items }: NavBarProps) => {
  const { activeSection } = useSectionObserver(SECTIONS);
  const [currentHash, setCurrentHash] = useState(activeSection);

  const handleClick = ({ hash }: { hash: string }) => {
    setCurrentHash(hash);
  };

  useEffect(() => {
    setCurrentHash(activeSection);
  }, [activeSection]);

  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16">
        {items.map(({ hash, label }, i) => {
          return (
            <ItemNavBar key={i}>
              <LocaleHashLink
                hash={hash}
                onClick={handleClick}
                isActive={currentHash === hash}
              >
                {label}
              </LocaleHashLink>
            </ItemNavBar>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

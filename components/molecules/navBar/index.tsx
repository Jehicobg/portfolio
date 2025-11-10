import ItemNavBar from "@/components/atoms/itemNavBar";
import LocaleHashLink from "@/components/atoms/localeHashLink";
import { useState } from "react";

interface NavBarProps {
  items: {
    label: string;
    hash: string;
  }[];
}

const NavBar = ({ items }: NavBarProps) => {
  const [currentHash, setCurrentHash] = useState("");

  const handleClick = ({ hash }: { hash: string }) => {
    setCurrentHash(hash);
  };

  return (
    <nav>
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

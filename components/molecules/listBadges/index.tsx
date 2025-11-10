import Badge from "@/components/atoms/badge";

interface ListBadgesProps {
  items: [];
}

const ListBadges = ({ items }: ListBadgesProps) => {
  return (
    <ul className="mt-2 flex flex-wrap">
      {items.map((item) => {
        return (
          <li className="mr-1.5 mt-2" key={item}>
            <Badge label={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ListBadges;

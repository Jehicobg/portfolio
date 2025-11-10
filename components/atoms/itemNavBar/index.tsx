
interface ItemNavBarProps {
  children: React.ReactNode;
}

const ItemNavBar = ({ children }: ItemNavBarProps) => {
  return <li>{children}</li>;
};

export default ItemNavBar;

interface CardContentProps {
  children: React.ReactNode;
}

const CardContent = ({ children }: CardContentProps) => {
  return <div className="w-3/3">{children}</div>;
};

export default CardContent;

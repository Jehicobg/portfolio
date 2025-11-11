interface CardProps {
  children: React.ReactNode;
  reverseOnMobile: boolean;
}

const Card = ({ children, reverseOnMobile }: CardProps) => {
  return (
    <div className={`lg:flex gap-6 lg:gap-4 rounded-2xl z-10 transition-all relative lg:flex-row ${reverseOnMobile && 'flex-col-reverse flex'}`}>
      {children}
    </div>
  );
};

export default Card;

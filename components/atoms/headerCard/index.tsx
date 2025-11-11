interface HeaderCardProps {
  title: string;
  company?: string;
}

const HeaderCard = ({ title, company }: HeaderCardProps) => {
  return (
    <>
      <span className="inline-block">{title}</span>
      {company && (
        <>
          <span> · </span>
          <span className="inline-block">{company}</span>
        </>
      )}
    </>
  );
};

export default HeaderCard;

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "p";
  children: React.ReactNode;
  className?: string;
}

const Typography = ({ variant, children, className }: TypographyProps) => {
  const Tag = variant;

  const styles = {
    h1: "text-4xl font-bold lg:text-5xl text-slate-200",
    h2: "text-xl font-medium lg:text-lg text-slate-200 mt-4",
    h3: "text-base font-medium leading-snug text-slate-200",
    p: "lg:text-base lg:leading-7 text-justify text-sm leading-normal",
  };

  return (
    <Tag
      className={`${styles[variant as keyof typeof styles]} font-inter ${
        className ?? ""
      }`}
    >
      {children}
    </Tag>
  );
};

export default Typography;

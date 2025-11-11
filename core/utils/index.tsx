export const generateNewRoute = ({
  language,
  pathname,
}: {
  language: string;
  pathname: string;
}) => {
  return `/${language}${pathname.replace(/^\/(en|es)/, "")}`;
};

export const SECTIONS = ["about", "experiences", "projects"];

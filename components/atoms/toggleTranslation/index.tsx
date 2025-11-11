import { ToggleLeft, ToggleRight } from "lucide-react";

interface ToggleTranslationProps {
  currentLang: "en" | "es";
  onToggle: () => void;
}

const ToggleTranslation = ({
  currentLang,
  onToggle,
}: ToggleTranslationProps) => {
  return (
    <div className="flex justify-between items-center absolute right-6 top-14 z-10 gap-2">
      <span
        className={`font-inter ${currentLang === "es" && "text-slate-200"}`}
      >
        ES
      </span>
      <button
        type="button"
        onClick={onToggle}
        className="cursor-pointer transition-all duration-300"
        title="Toggle language"
      >
        {currentLang === "es" ? <ToggleLeft /> : <ToggleRight />}
      </button>
      <span
        className={`font-inter ${currentLang === "en" && "text-slate-200"}`}
      >
        EN
      </span>
    </div>
  );
};

export default ToggleTranslation;

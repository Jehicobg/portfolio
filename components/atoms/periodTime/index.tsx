interface PeriodTimeProps {
  period: string;
}

const PeriodTime = ({ period }: PeriodTimeProps) => {
  return (
    <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 font-inter w-1/3">
      {period}
    </div>
  );
};

export default PeriodTime;

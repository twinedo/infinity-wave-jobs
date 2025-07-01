import { bgPrimary } from "@/lib/utils/const";

type SelectTypeProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SelectType = (props: SelectTypeProps) => {
  const {value, onChange} = props;
  return (
    <div
      className={bgPrimary + " flex flex-1 items-center gap-x-2 p-4 h-[72px]"}
    >
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 w-full rounded-lg bg-transparent focus:outline-none"
      >
        <option value="">All Types</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
    </div>
  );
};

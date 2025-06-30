import { bgPrimary } from "@/lib/utils/const";

export const SelectType = () => {
  return (
    <div className={bgPrimary + " flex flex-1 items-center gap-x-2 p-4 h-[72px]"}>
      <select className="p-2 w-full rounded-lg bg-transparent focus:outline-none">
        <option value="full-time">Full-Time</option>
        <option value="part-time">Part-Time</option>
        <option value="contract">Contract</option>
        <option value="internship">Internship</option>
      </select>
    </div>
  );
};

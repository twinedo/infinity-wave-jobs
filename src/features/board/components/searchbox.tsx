import { bgPrimary } from "@/utils/const";
import { MdClose } from "react-icons/md";

export const SearchBox = () => {
  return (
    <div className={bgPrimary + " flex flex-1/2 items-center gap-x-2 p-4 h-[72px]"}>
      <input
        type="text"
        placeholder="Search for jobs..."
        className="w-full p-2 rounded-lg focus:outline-none"
      />
      <MdClose className="text-gray-500 cursor-pointer hover:text-gray-800 transition-colors" size={24} />
    </div>
  );
};

import { bgPrimary } from "@/lib/utils/const";
import { MdClose } from "react-icons/md";

type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

export const SearchBox = (props: SearchBoxProps) => {
  const { value, onChange, onClear } = props;

  return (
    <div
      className={bgPrimary + " flex flex-1/2 items-center gap-x-2 p-4 h-[72px]"}
    >
      <input
        type="text"
        placeholder="Search for jobs..."
        className="w-full p-2 rounded-lg focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value.length > 0 && (
        <MdClose
          className="text-gray-500 cursor-pointer hover:text-gray-800 transition-colors"
          size={24}
          onClick={onClear}
        />
      )}
    </div>
  );
};

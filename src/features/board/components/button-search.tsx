import { ComponentPropsWithoutRef } from "react";

export const ButtonSearch = (props: ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer h-[72px] w-30 hover:bg-blue-600 transition-colors"
      {...props}
    >
      Search
    </button>
  );
};

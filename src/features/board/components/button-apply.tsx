import { ComponentPropsWithoutRef } from "react";

export const ButtonApply = (props: ComponentPropsWithoutRef<"button">) => {
  return (
    <button className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-500 text-[12px] h-[48px] w-[150px] text-white p-2 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:from-purple-500 hover:to-blue-500 transition-shadow" {...props}>
      Apply
    </button>
  );
}
import { ComponentPropsWithoutRef } from "react";

export const ButtonApply = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r cursor-pointer from-blue-500 to-purple-500 text-[12px] h-[48px] md:w-[150px] w-full text-white p-2 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:from-purple-500 hover:to-blue-500 transition-shadow" {...props}>
      Apply
    </div>
  );
}
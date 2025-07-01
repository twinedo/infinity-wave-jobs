import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonIconProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export const ButtonIcon = (props: ButtonIconProps) => {
  const { children } = props;
  return (
    <div className="w-7 h-7 rounded-xl shadow-md cursor-pointer flex items-center justify-center bg-white/50 text-black" {...props}>
      {children}
    </div>
  );
};

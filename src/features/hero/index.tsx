import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-full max-w-7xl gap-y-4 items-center h-[320px]">
      <div className="text-black text-6xl font-bold">
        Welcome to Infinity Wave Jobs
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <div className="text-black text-4xl font-bold">Where you find Jobs </div>
        <ContainerTextFlip words={["easily", "efficiently", "better"]} />
      </div>
    </div>
  );
};

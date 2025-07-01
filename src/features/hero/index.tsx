import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export const Hero = () => {
  return (
    <div className="relative w-full max-w-7xl mt-8">
      <div className="flex flex-col justify-center w-full max-w-7xl gap-y-4 items-center h-[320px]">
        <div className="text-black md:text-6xl text-3xl font-bold text-center">
          Welcome to Infinity Wave Jobs
        </div>
        <div className="flex md:flex-row flex-col items-center md:gap-x-4 gap-y-3">
          <div className="text-black md:text-4xl text-2xl font-bold">
            Where you find Jobs{" "}
          </div>
          <ContainerTextFlip words={["easily", "efficiently", "better"]} />
        </div>
      </div>
    </div>
  );
};

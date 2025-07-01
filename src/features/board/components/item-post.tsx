'use client'
import { ActionPost } from "./action-post";
import { ButtonApply } from "./button-apply";

type ItemPostProps = {
  onClick?: () => void
}

export const ItemPost = (props: ItemPostProps) => {
  const {onClick} = props;

  return (
    <div 
      className="flex flex-row items-center justify-between w-full max-w-7xl p-4 gap-x-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
      >
      <div>
        <div className="p-4 rounded-2xl flex items-center justify-center bg-white w-32 h-32">
          LOGO
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start gap-y-4">
        <div className="flex flex-row items-center gap-x-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-[12px] text-white p-2 rounded-2xl font-bold shadow-xl">
            Be an early applicant
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-[12px] text-white p-2 rounded-2xl font-bold shadow-xl">
            1 hour ago
          </div>
        </div>
        <div className="text-4xl font-bold">JOB Title</div>
        <div className="flex flex-row items-center gap-x-2">
          <div className="">Company Name</div>
          <div className="text-gray-600">/ Financial Service</div>
        </div>
      </div>
      <div className="flex-1">
        <div className=" grid grid-cols-2 gap-x-4">
          <div className="flex flex-col items-start">
            <div className="text-gray-600">Country</div>
            <div className="text-lg font-bold">United States</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-gray-600">Location</div>
            <div className="text-lg font-bold">Remote</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-gray-600">Salary</div>
            <div className="text-lg font-bold">$100,000 - $120,000</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-gray-600">Type</div>
            <div className="text-lg font-bold">Full-time</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between gap-y-7">
        <ActionPost />
        <ButtonApply onClick={onClick} />
      </div>
      
    </div>
  );
};

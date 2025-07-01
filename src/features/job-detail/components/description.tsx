export const JobDescription = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row items-center gap-x-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-[12px] text-white p-2 rounded-2xl font-bold shadow-xl">
            Be an early applicant
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-[12px] text-white p-2 rounded-2xl font-bold shadow-xl">
            1 hour ago
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-[12px] text-white p-2 rounded-2xl font-bold shadow-xl">
            20 applicants
          </div>
        </div>
        <div className="text-2xl font-bold text-black">Frontend Developer</div>
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
    </div>
  );
};

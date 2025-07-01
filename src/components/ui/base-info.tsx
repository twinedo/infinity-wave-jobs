export const BaseInfo = (props: Partial<Job>) => {
  const { country, location, salary_range, job_type } = props;

  return (
    <div className=" grid grid-cols-2 gap-x-4">
      <div className="flex flex-col items-start">
        <div className="text-gray-600">Country</div>
        <div className="text-lg font-bold">{country}</div>
      </div>
      <div className="flex flex-col items-start">
        <div className="text-gray-600">Location</div>
        <div className="text-lg font-bold">{location}</div>
      </div>
      <div className="flex flex-col items-start">
        <div className="text-gray-600">Salary</div>
        <div className="text-lg font-bold">{salary_range}</div>
      </div>
      <div className="flex flex-col items-start">
        <div className="text-gray-600">Type</div>
        <div className="text-lg font-bold">{job_type}</div>
      </div>
    </div>
  );
};

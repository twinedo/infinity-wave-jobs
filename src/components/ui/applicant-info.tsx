import { format } from "date-fns";

export const ApplicantInfo = (props: Partial<Job>) => {
  const { applicants = 0, posted_date } = props;

  return (
    <div className="flex flex-row items-center gap-x-4">
      {applicants < 50 && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-[12px] text-white p-2 rounded-2xl font-bold shadow-xl">
          Be an early applicant
        </div>
      )}
      {posted_date && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-[12px] text-white p-2 rounded-2xl font-bold shadow-xl">
          {format(posted_date, "MMM dd, yyyy")}
        </div>
      )}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-[12px] text-white p-2 rounded-2xl font-bold shadow-xl">
        {applicants} applicants
      </div>
    </div>
  );
};

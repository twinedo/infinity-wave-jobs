import { ApplicantInfo } from "@/components/ui/applicant-info";
import { BaseInfo } from "@/components/ui/base-info";

export const JobDescription = (props: Partial<Job>) => {
  const {
    title,
    location,
    job_type,
    posted_date,
    country,
    salary_range,
    applicants = 0,
  } = props;

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-3">
        <ApplicantInfo applicants={applicants} posted_date={posted_date} />
        <div className="text-2xl font-bold text-black">{title}</div>
      </div>
      <div className="flex-1">
        <BaseInfo
          country={country}
          location={location}
          salary_range={salary_range}
          job_type={job_type}
        />
      </div>
    </div>
  );
};

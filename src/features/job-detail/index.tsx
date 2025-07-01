import { CompanyInfo } from "./components/company-info";
import { Responsibilities } from "./components/responsibilities";
import { Qualifications } from "./components/qualifications";
import { JobDescription } from "./components/description";
import { SocialMedia } from "./components/social-media";
import { ActionPost } from "@/components/ui/action-post";
import { ButtonApply } from "@/components/ui/button-apply";

type JobDetailProps = {
  data: Job;
};

export const JobDetail = (props: JobDetailProps) => {
  const {
    company,
    company_business,
    title,
    location,
    job_type,
    posted_date,
    country,
    salary_range,
    applicants,
    social_media,
    company_logo,
    founded_in,
    address,
    employees_count,
    website,
    responsibilities,
    qualifications,
  } = props.data;

  return (
    <div className="flex flex-row items-start gap-x-6">
      <div className="flex flex-col gap-y-4 w-1/5">
        <div className="flex flex-col gap-y-2">
          <div className="p-4 rounded-2xl flex items-center justify-center bg-white w-32 h-32">
            <img
              alt="company_logo"
              src={company_logo}
              className="w-24 h-24 object-contain"
            />
          </div>
          <SocialMedia
            linkedin={social_media.linkedin}
            glassdoor={social_media.glassdoor}
            twitter={social_media.twitter}
          />
        </div>
        <CompanyInfo
          company={company}
          company_business={company_business}
          foundedIn={`Founded in ${founded_in}`}
          address={address}
          employees={`${employees_count} employees`}
          website={website}
        />
      </div>

      <div className="flex flex-col gap-y-6 w-full">
        <div className="flex flex-row">
          <div className="flex flex-1 w-full">
            <JobDescription
              title={title}
              location={location}
              job_type={job_type}
              posted_date={posted_date}
              country={country}
              salary_range={salary_range}
              applicants={applicants}
            />
          </div>
          <div className="flex">
            <ActionPost />
          </div>
        </div>
        <div className="flex flex-row grow items-center gap-x-4">
          <div className="flex flex-1">
            <Responsibilities data={responsibilities} />
          </div>
          <div className="flex flex-1">
            <Qualifications data={qualifications} />
          </div>
        </div>
        <ButtonApply />
      </div>
    </div>
  );
};

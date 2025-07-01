"use client";
import { ComponentPropsWithoutRef } from "react";
import { BaseInfo } from "@/components/ui/base-info";
import { ApplicantInfo } from "@/components/ui/applicant-info";
import { ActionPost } from "@/components/ui/action-post";
import { ButtonApply } from "@/components/ui/button-apply";

type ItemPostProps = {} & Partial<Job> & ComponentPropsWithoutRef<"div">;

export const ItemPost = (props: ItemPostProps) => {
  const {
    onClick,
    applicants = 0,
    posted_date,
    title,
    company,
    company_business,
    company_logo,
    country,
    location,
    salary_range,
    job_type,
  } = props;

  return (
    <div
      className="flex flex-row items-center justify-between w-full max-w-7xl p-4 gap-x-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
      {...props}
    >
      <div>
        <div className="p-4 rounded-2xl flex items-center justify-center bg-white w-32 h-32">
          <img
            alt="company_logo"
            src={company_logo}
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start gap-y-4">
        <ApplicantInfo applicants={applicants} posted_date={posted_date} />
        <div className="text-4xl font-bold">{title}</div>
        <div className="flex flex-row items-center gap-x-2">
          <div className="">{company}</div>
          <div className="text-gray-600">/ {company_business}</div>
        </div>
      </div>
      <div className="flex-1">
        <BaseInfo
          country={country}
          location={location}
          salary_range={salary_range}
          job_type={job_type}
        />
      </div>
      <div className="flex flex-col items-end justify-between gap-y-7">
        <ActionPost />
        <ButtonApply onClick={onClick} />
      </div>
    </div>
  );
};

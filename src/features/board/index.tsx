"use client";
import { bgPrimary } from "@/lib/utils/const";
import { ButtonSearch } from "./components/button-search";
import { SearchBox } from "./components/searchbox";
import { SelectType } from "./components/select-type";
import { ItemPost } from "./components/item-post";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import { JobDetail } from "../job-detail";
import { useJobs } from "@/hooks/useJob";

export const Board = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job>();

  const { jobs, loading, error } = useJobs();

  const onSelectItem = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-4">
      <div className="flex flex-row items-center gap-x-4">
        <SearchBox />
        <SelectType />
        <ButtonSearch />
      </div>
      <div
        className={
          bgPrimary + " flex flex-col items-center justify-center p-4 gap-y-8"
        }
      >
        {loading && <div className="text-center text-white">Loading...</div>}
        {error && (
          <div className="text-center text-red-500">
            Something wrong. Please try again
          </div>
        )}
        {jobs.length > 0 &&
          jobs.map((item) => (
            <ItemPost
              key={item.id}
              applicants={item.applicants}
              posted_date={item.posted_date}
              title={item.title}
              company={item.company}
              company_business={item.company_business}
              company_logo={item.company_logo}
              country={item.country}
              location={item.location}
              salary_range={item.salary_range}
              job_type={item.job_type}
              onClick={() => onSelectItem(item)}
            />
          ))}
      </div>
      {selectedJob && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Detail Job"
          bgPrimary="bg-indigo-50"
          modalClassName="max-w-7xl"
          contentClassName="flex flex-col gap-4"
        >
          <JobDetail data={selectedJob} />
        </Modal>
      )}
    </div>
  );
};

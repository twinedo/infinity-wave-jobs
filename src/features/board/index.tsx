"use client";
import { bgPrimary } from "@/lib/utils/const";
import { ButtonSearch } from "./components/button-search";
import { SearchBox } from "./components/searchbox";
import { SelectType } from "./components/select-type";
import { ItemPost } from "./components/item-post";
import { Modal } from "@/components/ui/modal";
import { useEffect, useState } from "react";
import { JobDetail } from "../job-detail";
import { useJobs } from "@/hooks/useJob";

export const Board = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job>();
  const [searchQuery, setSearchQuery] = useState("");
  const [jobType, setJobType] = useState("");

  const { jobs, loading, error } = useJobs();
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    if (
      (!loading && jobs.length > 0) ||
      (jobType === "" && searchQuery.length === 0)
    ) {
      setFilteredJobs(jobs);
    }
  }, [loading, jobs, jobType, searchQuery]);

  const onSearch = () => {
    let results = [...jobs];

    if (searchQuery.trim() !== "") {
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company_business
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (jobType !== "") {
      results = results.filter(
        (job) => job.job_type.toLowerCase() === jobType.toLowerCase()
      );
    }

    setFilteredJobs(results);
  };

  const onSelectItem = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-4">
      <div className="flex flex-row items-center gap-x-4">
        <SearchBox
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => {
            setSearchQuery("");
            onSearch();
          }}
        />
        <SelectType value={jobType} onChange={setJobType} />
        <ButtonSearch onClick={onSearch} />
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
        {filteredJobs.length > 0 &&
          filteredJobs.map((item) => (
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
        {filteredJobs.length === 0 && (
          <div className="text-center text-white text-2xl">No Jobs found</div>
        )}
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

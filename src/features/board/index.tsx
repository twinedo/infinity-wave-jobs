"use client";
import { bgPrimary } from "@/lib/utils/const";
import { ButtonSearch } from "./components/button-search";
import { SearchBox } from "./components/searchbox";
import { SelectType } from "./components/select-type";
import { ItemPost } from "./components/item-post";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import { ButtonApply } from "./components/button-apply";
import { JobDetail } from "../job-detail";

export const Board = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <ItemPost onClick={() => setIsModalOpen(true)} />
        <ItemPost onClick={() => setIsModalOpen(true)} />
        <ItemPost onClick={() => setIsModalOpen(true)} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Detail Job"
        bgPrimary="bg-indigo-50"
        modalClassName="max-w-7xl" 
        contentClassName="flex flex-col gap-4"
      >
        <JobDetail />
        
      </Modal>
    </div>
  );
};

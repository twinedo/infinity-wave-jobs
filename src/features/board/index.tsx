import { bgPrimary } from "@/utils/const";
import { ButtonSearch } from "./components/button-search";
import { SearchBox } from "./components/searchbox";
import { SelectType } from "./components/select-type";
import { ItemPost } from "./components/item-post";

export const Board = () => {
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
        <ItemPost />
        <ItemPost />
        <ItemPost />
      </div>
    </div>
  );
};

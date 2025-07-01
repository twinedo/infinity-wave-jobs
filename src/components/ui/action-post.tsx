import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { TbMessageReportFilled } from "react-icons/tb";

export const ActionPost = () => {
  return (
    <div className="flex flex-row gap-x-3" >
      <div>
        <FaRegBookmark
          size={24}
          className="text-black  cursor-pointer"
        />
      </div>
      <div>
        <FaShareAlt
          size={24}
          className="text-black cursor-pointer"
        />
      </div>
      <div>
        <TbMessageReportFilled
          size={24}
          className="text-black cursor-pointer"
        />
      </div>
    </div>
  );
};

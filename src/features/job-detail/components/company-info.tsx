import { FaRegCalendar } from "react-icons/fa";
import { LuMapPinCheckInside } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

type CompanyInfoProps = {
  foundedIn: string;
  address: string;
  employees: string;
  website: string;
};

export const CompanyInfo = (props: CompanyInfoProps) => {
  const { foundedIn, address, employees, website } = props;
  return (
    <div className="flex flex-col items-start gap-y-3">
      <div className="flex flex-row items-center gap-x-2">
        <div>
          <FaRegCalendar size={16} />
        </div>
        <div className="text-sm text-black">{foundedIn}</div>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        <div>
          <LuMapPinCheckInside size={16} />
        </div>
        <div className="text-sm text-black">{address}</div>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        <div>
          <IoPersonOutline size={16} />
        </div>
        <div className="text-sm text-black">{employees}</div>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        <div>
          <TbWorld size={16} />
        </div>
        <a
          className="text-sm text-black cursor-pointer"
          href={website}
          target="_blank"
        >
          {website}
        </a>
      </div>
    </div>
  );
};

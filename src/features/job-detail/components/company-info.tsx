import { FaRegCalendar } from "react-icons/fa";
import { LuMapPinCheckInside } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { ReactNode } from "react";

type CompanyInfoProps = {
  company: string;
  company_business: string;
  foundedIn: string;
  address: string;
  employees: string;
  website: string;
};

export const CompanyInfo = (props: CompanyInfoProps) => {
  const { company, company_business, foundedIn, address, employees, website } =
    props;

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex md:flex-col flex-row items-center md:items-start md:gap-y-2 gap-x-2">
        <div className="font-bold">{company}</div>
        <div className="text-xs">{company_business}</div>
      </div>

      <div className="flex flex-col items-start gap-y-2">
        <RowItem icon={<FaRegCalendar size={16} />} text={foundedIn} />
        <RowItem icon={<LuMapPinCheckInside size={16} />} text={address} />
        <RowItem icon={<IoPersonOutline size={16} />} text={employees} />
        <RowItem icon={<TbWorld size={16} />} text={website} />
      </div>
    </div>
  );
};

const RowItem = ({ text, icon }: { text: string; icon: ReactNode }) => {
  return (
    <div className="flex flex-row items-center gap-x-2">
      {icon}
      <div className="text-sm text-black">{text}</div>
    </div>
  );
};

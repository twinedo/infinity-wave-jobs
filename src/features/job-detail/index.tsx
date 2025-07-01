import { FaLinkedin } from "react-icons/fa";
import { SiGlassdoor } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";
import { CompanyInfo } from "./components/company-info";
import { ButtonIcon } from "@/components/ui/button-icon";
import { Responsibilities } from "./components/responsibilities";
import { Qualifications } from "./components/qualifications";
import { JobDescription } from "./components/description";
import { ButtonApply } from "../board/components/button-apply";
import { ActionPost } from "../board/components/action-post";

export const JobDetail = () => {
  return (
    <div className="flex flex-row items-start gap-x-6">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <div className="p-4 rounded-2xl flex items-center justify-center bg-white w-32 h-32">
            LOGO
          </div>
          <div className="flex flex-row items-center gap-x-2 ml-3">
            <ButtonIcon>
              <FaLinkedin size={16} />
            </ButtonIcon>
            <ButtonIcon>
              <SiGlassdoor size={16} />
            </ButtonIcon>
            <ButtonIcon>
              <FaTwitter size={16} />
            </ButtonIcon>
          </div>
        </div>
        <div className="gap-y-2">
          <div className="font-bold">Company Name</div>
          <div className="text-xs">Financial Services</div>
        </div>

        {/* <div className="w-full h-[0.5px] bg-gray-400" /> */}
        <CompanyInfo
          foundedIn="Founded in 2015"
          address="Jacksonville, Florida, USA"
          employees="100-500 employees"
          website="https://kdawnd.com"
        />
      </div>

      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row">
          <div className="flex flex-1">
            <JobDescription />
          </div>
          <ActionPost />
        </div>
        <Responsibilities />
        <Qualifications />
        <ButtonApply />
      </div>
    </div>
  );
};

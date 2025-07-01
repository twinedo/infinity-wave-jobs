import { ButtonIcon } from "@/components/ui/button-icon";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGlassdoor } from "react-icons/si";

type SocialMediaProps = {
  linkedin?: string;
  glassdoor?: string;
  twitter?: string;
};

export const SocialMedia = (props: SocialMediaProps) => {
  const { linkedin, glassdoor, twitter } = props;
  return (
    <div className="flex flex-row items-center gap-x-2 ml-3">
      <a href={linkedin} target="_blank">
        <ButtonIcon>
          <FaLinkedin size={16} />
        </ButtonIcon>
      </a>
      <a href={glassdoor} target="_blank">
        <ButtonIcon>
          <SiGlassdoor size={16} />
        </ButtonIcon>
      </a>
      <a href={twitter} target="_blank">
        <ButtonIcon>
          <FaTwitter size={16} />
        </ButtonIcon>
      </a>
    </div>
  );
};

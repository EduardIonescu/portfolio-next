import { socialLinks } from "@/app/config";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

type SocialLinkProps = { href: string; icon: IconType };
export function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="w-6 h-6" />
    </a>
  );
}

export function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
    </div>
  );
}

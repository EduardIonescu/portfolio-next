"use client";

import { metaData, socialLinks } from "../../config";
import { SocialLinks } from "./socialLink";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.name}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}

import { Metadata } from "next";
import { BiCode } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";
import { GiLightBulb } from "react-icons/gi";
import TechnologyCategory from "../components/technologyCategory";
import { technologies } from "./technologies-data";

export const metadata: Metadata = {
  title: "Technologies",
  description: "The technologies I use and enjoy.",
};

export default function Technologies() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-medium tracking-tight">Technologies</h1>
      <p className="prose prose-neutral opacity-80">
        The technologies I use and enjoy.
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <TechnologyCategory
          title="Frontend"
          icon={BiCode}
          technologies={technologies.frontend}
        />
        <TechnologyCategory
          title="Backend"
          icon={BsDatabase}
          technologies={technologies.backend}
        />
        <TechnologyCategory
          title="Other"
          icon={GiLightBulb}
          technologies={technologies.other}
        />
      </div>
    </section>
  );
}

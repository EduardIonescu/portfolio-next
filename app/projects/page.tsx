import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "A recent selection of projects that I've worked on",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-medium tracking-tight">
        Personal Projects
      </h1>
      <p className="prose prose-neutral opacity-80">
        Below is a recent selection of projects that I've worked on.
      </p>
      <div className="flex flex-col gap-8 mt-16">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col justify-center bg-black/[0.01]
            shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-8"
          >
            <div className="relative rounded-xl mb-4 shadow-project overflow-hidden">
              <Image
                width={600}
                height={300}
                quality={90}
                src={project.image}
                alt=""
                className="rounded-xl bg-cover"
              />
            </div>
            <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
              {project.title}
            </h3>
            <p className="text-slate-500 text-base">{project.description}</p>

            <div className="flex gap-2 mt-2">
              <a
                href={project.href.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 
                text-sm font-medium text-slate-500 border border-slate-500 
                rounded-full hover:border-slate-700 hover:text-slate-700 
                transition-colors"
              >
                Live
              </a>
              <a
                href={project.href.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 
                text-sm font-medium text-slate-500 border border-slate-500 
                rounded-full hover:border-slate-700 hover:text-slate-700 
                transition-colors"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

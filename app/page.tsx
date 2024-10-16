import Image from "next/image";
import { experience, socialLinks } from "./config";

export default function Home() {
  return (
    <>
      <section>
        <h1 className="mb-8 text-3xl font-medium tracking-tight">
          Information
        </h1>

        <div className="prose prose-neutral">
          <p>
            Hi there, I'm Eduard. I enjoy enhancing the functionality of
            websites I frequently use, build my own and also working on
            microcontroller projects.
          </p>

          <p>
            Most recently, I was working for DeepSign GmbH, an AI startup, to
            help build the future of Multi-factor authentication as a FullStack
            Developer.
          </p>
          <p>
            I've always bounced somewhere between frontend, backend and UX,
            however the common thread has always been my love for building
            things that people enjoy.
          </p>
          <p>
            If you're interested in working together, you can view my{" "}
            <a href="/Eduard Ionescu - CV.pdf" target="_blank">
              CV here
            </a>
            . Feel free to reach out to me here:{" "}
            <a href={socialLinks.email} target="_blank">
              eduardionescu26@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <div className="border-[1px] border-t-black/5 border-transparent my-8 sm:my-10" />

      <section>
        <h2 className=" mb-4 text-2xl font-medium tracking-tight">
          Experience
        </h2>

        <div className="flex gap-4 py-6">
          <Image
            width={56}
            height={56}
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-14 h-14 rounded-xl aspect-square"
          />
          <div className="flex flex-col col-span-9">
            <span className="text-slate-800 text-xl font-semibold">
              {experience.company}
            </span>
            <span className="text-slate-700 text-lg">{experience.role}</span>
            <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
              {experience.date}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

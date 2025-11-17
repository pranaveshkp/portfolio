// app/page.tsx
"use client";

import { useState } from "react";
import projectsData from "./data/projects.json";
import skillsData from "./data/skills.json";
import { Button } from "@/components/ui/button";
import ProjectModal from "@/components/ProjectModal";
import Reveal from "@/components/Reveal";
import type { Project, SkillCategory } from "@/types";



export default function Home() {
  const { projects } = projectsData as { projects: Project[] };
  const { categories } = skillsData as { categories: SkillCategory[] };

  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* push content below fixed navbar */}
      <main className="pt-14">
        {/* HERO WITH BG VIDEO */}
        <section
          id="home"
          className="relative min-h-[calc(100vh-3.5rem)] flex items-center"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
            src="/bgvid.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />

          <div className="relative z-10 container mx-auto px-6 py-16 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-center">
            {/* LEFT: TEXT */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-300">
                AI &amp; Software Developer
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-sky-300">Pranavesh Kotike</span>.
              </h1>
              <p className="mt-4 text-lg text-slate-100">
                Grad CS student at Purdue University Fort Wayne, building
                intelligent, data-driven applications in Machine Learning,
                Generative AI, and full-stack web development.
              </p>
              <p className="mt-2 text-sm text-slate-300">
                From CNNs for security and disease prediction to full-stack
                e-learning platforms, I care about real-world impact and clean
                engineering.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-black hover:bg-slate-100"
                  asChild
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>

            {/* RIGHT: PICTURE */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-66 w-66 md:h-64 md:w-64 rounded-full border border-white/20 bg-black/50 overflow-hidden shadow-[0_0_80px_rgba(56,189,248,0.35)]">
                <img
                  src="/me.png"
                  alt="Pranavesh Kotike"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>


        {/* PROJECTS */}
        <section id="projects" className="py-16 border-t border-white/10">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setOpenProject(project)}
                  className="cursor-pointer rounded-2xl border border-white/10 bg-zinc-950/80 p-5 hover:border-sky-400/70 transition"
                >

                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-200">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-[11px] rounded-full border border-white/15 px-2 py-0.5 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-16 bg-gradient-to-b from-black to-zinc-950 border-t border-white/10">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5"
                >
                  <h3 className="text-sm font-semibold text-sky-300">
                    {cat.name}
                  </h3>
                  <div className="mt-3 space-y-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between text-sm text-slate-100"
                      >
                        <span>{skill.name}</span>
                        <span className="text-xs text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-24 border-t border-white/10 bg-black relative overflow-hidden"
        >
          {/* Floating blurred shape */}
          <div className="absolute -top-10 right-0 h-64 w-64 bg-sky-500/20 blur-[120px] rounded-full opacity-20" />

          <div className="relative container mx-auto px-6 max-w-xl text-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-b from-white to-sky-300 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>

            <p className="text-slate-400 mb-10 text-sm leading-relaxed">
              I&apos;m open to opportunities in AI/ML, Generative AI, and full-stack
              engineering. Reach out anytime — I respond quickly and professionally.
            </p>

            {/* CONTACT CARD */}
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-10 shadow-xl backdrop-blur-lg">
                {/* EMAIL */}
                <div className="flex flex-col items-center gap-2 mb-10">
                  <span className="text-sky-400 font-medium text-sm flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 7.5l-9.75 6L2.25 7.5"
                      />
                    </svg>
                    Email
                  </span>

                  <a
                    href="mailto:kotikepranavesh3@gmail.com"
                    className="text-lg font-medium hover:text-sky-400 transition"
                  >
                    kotikepranavesh3@gmail.com
                  </a>

                  <button
                    onClick={() =>
                      navigator.clipboard.writeText("kotikepranavesh3@gmail.com")
                    }
                    className="mt-2 px-4 py-1 text-xs rounded-lg border border-white/20 hover:bg-white/10 transition"
                  >
                    Copy Email
                  </button>
                </div>

                {/* DIVIDER */}
                <div className="w-full h-px bg-white/10 my-8" />

                {/* SOCIAL BUTTONS */}
                <div className="flex flex-col items-center gap-4">
                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/in/kotike-pranavesh/"
                    target="_blank"
                    className="w-full py-3 rounded-xl border border-white/20 hover:border-sky-400 hover:bg-sky-400 hover:text-black transition flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.29 17V10.59H5.87V17M7.08 9.5H7.06A1.23 1.23 0 1 1 7.08 9.5M18.13 17V13.29C18.13 11.22 17 10.18 15.4 10.18C14.19 10.18 13.5 10.83 13.2 11.38V10.59H10.78C10.81 11.19 10.78 17 10.78 17H13.2V13.5C13.2 13.31 13.22 13.12 13.28 12.97C13.45 12.56 13.83 12.14 14.47 12.14C15.31 12.14 15.74 12.78 15.74 13.79V17H18.13Z" />
                    </svg>
                    Connect on LinkedIn →
                  </a>

                  {/* GitHub Button */}
                  <a
                    href="https://github.com/pranaveshkp"
                    target="_blank"
                    className="w-full py-3 rounded-xl border border-white/20 hover:border-sky-400 hover:bg-sky-400 hover:text-black transition flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.4C6.73 20 6.14 18.28 6.14 18.28C5.68 17.14 5.03 16.84 5.03 16.84C4.12 16.28 5.1 16.29 5.1 16.29C6.1 16.36 6.63 17.31 6.63 17.31C7.5 18.78 8.97 18.34 9.54 18.1C9.62 17.47 9.86 17.05 10.14 16.79C7.95 16.53 5.64 15.54 5.64 11.75C5.64 10.67 6 9.82 6.63 9.16C6.53 8.9 6.21 7.97 6.73 6.65C6.73 6.65 7.53 6.39 9.5 7.67C10.26 7.46 11.08 7.35 11.9 7.35C12.72 7.35 13.54 7.46 14.3 7.67C16.27 6.39 17.07 6.65 17.07 6.65C17.59 7.97 17.27 8.9 17.17 9.16C17.8 9.82 18.16 10.67 18.16 11.75C18.16 15.55 15.85 16.52 13.66 16.78C13.99 17.08 14.32 17.7 14.32 18.68V21C14.32 21.27 14.47 21.59 14.98 21.5C18.95 20.16 21.82 16.41 21.82 12C21.82 6.48 17.52 2 12 2Z" />
                    </svg>
                    View GitHub →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {openProject && (
          <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
        )}

      </main>
    </div>
  );
}

"use client";

import type { Project } from "@/types";

type ProjectModalProps = {
    project: Project;
    onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
            {/* MODAL BOX */}
            <div className="relative w-full max-w-3xl bg-zinc-950 text-white rounded-2xl p-6 border border-white/10 shadow-xl">
                {/* CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
                >
                    ✕
                </button>

                {/* IMAGE */}
                {project.image && (
                    <div className="rounded-xl overflow-hidden mb-6">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                )}

                {/* TITLE */}
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

                {/* DESCRIPTION */}
                <p className="text-slate-300 mb-4">{project.description}</p>

                {/* DETAILS */}
                {project.details && (
                    <ul className="list-disc list-inside text-slate-400 space-y-1 mb-6">
                        {project.details.map((d, i) => (
                            <li key={i}>{d}</li>
                        ))}
                    </ul>
                )}

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[11px] rounded-full border border-white/30 px-2 py-0.5 text-slate-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* GITHUB BUTTON */}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-5 py-2 rounded-lg border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black transition"
                    >
                        View on GitHub →
                    </a>
                )}
            </div>
        </div>
    );
}

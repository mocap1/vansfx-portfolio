"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardVideoRef = useRef<HTMLVideoElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLocalVideo = Boolean(project.preview);
  const isYouTube = Boolean(project.youtubeId);

  const youtubeThumbnail = project.youtubeId
    ? `https://i.ytimg.com/vi/${project.youtubeId}/maxresdefault.jpg`
    : "";

  const fallbackYoutubeThumbnail = project.youtubeId
    ? `https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`
    : "";

  const thumbnail = project.thumbnail || youtubeThumbnail;

  const youtubeHoverUrl = project.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&mute=1&controls=0&start=0&end=30&loop=1&playlist=${project.youtubeId}&modestbranding=1&rel=0&playsinline=1`
    : "";

  const youtubeModalUrl = project.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&controls=1&rel=0&playsinline=1`
    : "";

  useEffect(() => {
    const video = cardVideoRef.current;
    if (!video || !project.preview) return;

    const setThumbnailFrame = () => {
      const thumbnailTime = Math.min(2, Math.max(video.duration - 0.1, 0));
      video.currentTime = thumbnailTime;
    };

    video.addEventListener("loadedmetadata", setThumbnailFrame);
    return () => video.removeEventListener("loadedmetadata", setThumbnailFrame);
  }, [project.preview]);

  useEffect(() => {
    const video = cardVideoRef.current;
    if (!video || !project.preview) return;

    if (isHovered) {
      video.muted = true;
      video.play().catch(() => {});
    } else {
      video.pause();
      if (video.duration) {
        video.currentTime = Math.min(2, Math.max(video.duration - 0.1, 0));
      }
    }
  }, [isHovered, project.preview]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsHovered(false);
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group block w-full text-left"
        aria-label={`Watch ${project.title}`}
      >
        <article className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.035] shadow-[0_10px_40px_rgba(0,0,0,0.24)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-violet-400/40 hover:bg-white/[0.05] hover:shadow-[0_24px_80px_rgba(124,58,237,0.22)]">
          <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] opacity-0 ring-1 ring-inset ring-violet-400/20 transition-opacity duration-500 group-hover:opacity-100" />

          <div
            className={`relative overflow-hidden bg-zinc-950 ${
              project.orientation === "portrait" ? "aspect-[9/16]" : "aspect-video"
            }`}
          >
            {isLocalVideo && (
              <video
                ref={cardVideoRef}
                src={project.preview}
                muted
                loop
                playsInline
                preload="metadata"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                  isHovered ? "scale-[1.045]" : "scale-100"
                }`}
              />
            )}

            {!isLocalVideo && thumbnail && (
              <img
                src={thumbnail}
                onError={(event) => {
                  if (project.youtubeId && event.currentTarget.src !== fallbackYoutubeThumbnail) {
                    event.currentTarget.src = fallbackYoutubeThumbnail;
                  }
                }}
                alt={project.title}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                  isHovered && isYouTube
                    ? "scale-[1.06] opacity-0"
                    : isHovered
                      ? "scale-[1.06] opacity-100"
                      : "scale-100 opacity-100"
                }`}
              />
            )}

            {!isLocalVideo && isHovered && isYouTube && (
              <iframe
                src={youtubeHoverUrl}
                title={`${project.title} preview`}
                allow="autoplay; encrypted-media"
                className="pointer-events-none absolute inset-0 h-full w-full animate-[fadeIn_.35s_ease-out]"
              />
            )}

            {!isLocalVideo && !thumbnail && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-sm text-zinc-500">
                Preview unavailable
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />
            <div className="pointer-events-none absolute inset-0 bg-violet-500/0 transition-colors duration-500 group-hover:bg-violet-500/[0.04]" />

            <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-violet-300/30">
                {project.category}
              </span>
              <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-200 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-0.5">
                {project.platform}
              </span>
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 scale-75 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white opacity-0 shadow-[0_0_40px_rgba(139,92,246,0.35)] backdrop-blur-xl transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100">
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
              <span className="translate-y-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/70">
                Preview project
              </span>
              <span className="translate-y-2 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Open ↗
              </span>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between gap-5">
              <div className="min-w-0">
                <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-violet-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                  {project.software}
                </p>
              </div>

              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-zinc-500 transition-all duration-300 group-hover:-rotate-12 group-hover:border-violet-400/30 group-hover:bg-violet-500/10 group-hover:text-violet-300">
                ↗
              </span>
            </div>
          </div>
        </article>
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 px-4 py-8 backdrop-blur-xl"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="relative my-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d12] shadow-[0_40px_140px_rgba(0,0,0,0.65)] animate-[modalIn_.3s_ease-out]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.14),transparent_35%)]" />

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/65 text-2xl text-white backdrop-blur-xl transition hover:scale-105 hover:border-violet-400/40 hover:bg-violet-600"
              aria-label="Close video"
            >
              ×
            </button>

            <div
              className={
                project.orientation === "portrait"
                  ? "relative mx-auto aspect-[9/16] max-h-[72vh] max-w-sm bg-black"
                  : "relative aspect-video w-full bg-black"
              }
            >
              {isLocalVideo ? (
                <video src={project.preview} controls autoPlay playsInline className="h-full w-full object-contain" />
              ) : isYouTube ? (
                <iframe
                  src={youtubeModalUrl}
                  title={project.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-zinc-500">Video unavailable</div>
              )}
            </div>

            <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                    {project.category}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-300">
                    {project.platform}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-300">
                    {project.software}
                  </span>
                </div>

                <h2 className="max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                  A selected editing project focused on pacing, visual clarity, storytelling, and viewer retention.
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-violet-600 px-6 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(124,58,237,0.35)] transition hover:-translate-y-0.5 hover:bg-violet-500"
              >
                View on {project.platform} ↗
              </a>
            </div>
          </div>

          <style jsx global>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes modalIn {
              from { opacity: 0; transform: translateY(20px) scale(0.985); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaJsSquare,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGo } from "react-icons/si";

const firstRow = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-400" },
  { name: "Next JS", icon: RiNextjsFill, color: "text-white" },
  { name: "React JS", icon: FaReact, color: "text-cyan-300" },
  { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-300" },
];

const secondRow = [
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "Figma", icon: FaFigma, color: "text-pink-400" },
  { name: "Go", icon: SiGo, color: "text-cyan-400" },
];

function TechCard({ tech }) {
  const Icon = tech.icon;

  return (
    <div className="flex min-w-[140px] sm:min-w-[160px] md:min-w-[180px] shrink-0 items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/20 bg-white/[0.04] px-3 sm:px-4 md:px-5 py-3 sm:py-4 backdrop-blur-md transition-transform duration-300">
      <Icon className={`text-2xl sm:text-3xl ${tech.color}`} />
      <span className="whitespace-nowrap text-xs sm:text-sm md:text-base font-medium tracking-wide text-white">
        {tech.name}
      </span>
    </div>
  );
}

function TechRow({ items, reverse = false, duration = 30 }) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-30 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-30 bg-gradient-to-l from-black to-transparent" />

      <div
        className={`flex w-max gap-5 ${reverse ? "marquee-reverse" : "marquee"}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {repeatedItems.map((tech, index) => (
          <TechCard key={`${tech.name}-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechStackSlider() {
  return (
    <>
      <section className="w-full bg-black py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-2 sm:px-4">
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            <TechRow items={firstRow} reverse duration={30} />
            <TechRow items={secondRow} duration={26} />
          </div>
        </div>
      </section>

      <style jsx global>{`
        .marquee,
        .marquee-reverse {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-play-state: running;
        }

        .group:hover .marquee,
        .group:hover .marquee-reverse {
          animation-play-state: paused;
        }

        .marquee {
          animation-name: scrollLeft;
        }

        .marquee-reverse {
          animation-name: scrollRight;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
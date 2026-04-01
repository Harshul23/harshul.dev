import React from "react";
import { Inter } from "next/font/google";
import ProjectCard from "./project-card";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const Projects = () => {
  return (
    <div className="min-h-[90vh] w-full flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-2xl sm:text-3xl md:text-4xl font-bold py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <span className="uppercase">So far I build ...</span>

      <div className="flex flex-col justify-evenly items-center gap-6 sm:gap-8 h-full w-full">
        <ProjectCard
          name="Octo CLI"
          description="A powerful CLI tool to simplify your workflow. Built with performance and developer experience in mind."
          link="https://octo-cli.vercel.app/"
          video="/octo-final.mp4"
        />
        <ProjectCard
          name="sup"
          description="A modern, AI-powered GitHub productivity dashboard that helps developers track their contributions, manage projects, and more."
          link="https://octo-alpha.vercel.app/"
          image="/sup.png"
        />
        <ProjectCard
          name="plex"
          description="Plex is a modern, Open Source Project showcase platform for sharing creative code experiments."
          link="https://harshul23.github.io/Plex/"
          image="/plex.png"
        />
      </div>
    </div>
  );
};

export default Projects;

"use client";

import React, { useRef, useLayoutEffect } from "react";
import { Inter } from "next/font/google";
import ProjectCard from "./project-card";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const Projects = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project-panel");

      const totalScroll = () =>
        wrapperRef.current.scrollWidth - window.innerWidth;

      gsap.to(wrapperRef.current, {
        x: () => -totalScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScroll()}`,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full block text-2xl sm:text-3xl md:text-4xl font-bold pt-6 sm:pt-8 bg-black">
      <div className="uppercase px-4 sm:px-6 md:px-8 lg:px-12 mb-8 block">
        So far I build ...
      </div>

      <div
        ref={containerRef}
        className="h-screen w-full flex items-center bg-black overflow-hidden relative"
      >
        <div ref={wrapperRef} className="flex w-full h-full">
          {/* Project 1 */}
          <div className="project-panel shrink-0 min-w-full h-full flex items-center justify-center">
            <div className="px-4 sm:px-12 w-full flex justify-center">
              <ProjectCard
                name="Octo CLI"
                description="A powerful CLI tool to simplify your workflow. Built with performance and developer experience in mind."
                link="https://octo-cli.vercel.app/"
                video="/octo-final.mp4"
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-panel shrink-0 min-w-full h-full flex items-center justify-center">
            <div className="px-4 sm:px-12 w-full flex justify-center">
              <ProjectCard
                name="sup"
                description="A modern, AI-powered GitHub productivity dashboard that helps developers track their contributions, manage projects, and more."
                link="https://octo-alpha.vercel.app/"
                image="/sup.png"
              />
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-panel shrink-0 min-w-full h-full flex items-center justify-center">
            <div className="px-4 sm:px-12 w-full flex justify-center">
              <ProjectCard
                name="plex"
                description="Plex is a modern, Open Source Project showcase platform for sharing creative code experiments."
                link="https://harshul23.github.io/Plex/"
                image="/plex.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

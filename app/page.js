"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import TechStackSlider from "./slider";
import LiquidNameTag from "./nametag";
import Projects from "./projects";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export default function Home() {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div
      className={`${inter.variable} flex min-h-screen w-full flex-col items-center bg-black font-poppins`}
    >
      <div className="m-4 flex h-[72px] w-[90%] items-center gap-64 rounded-2xl border border-white/50 pr-4 text-white">
        <LiquidNameTag active={isImageHovered} />

        <div className="flex items-center gap-34">
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </div>
      </div>

      <div className="flex min-h-9/10 w-full flex-col">
        <div className="flex min-h-[70vh] w-full items-center justify-center px-12 py-24">
          <div className="flex items-center gap-10">
            <div
              className="relative h-[400px] w-[400px] overflow-hidden bg-black"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <Image
                src="/harshul.png"
                alt="Harshul"
                fill
                priority
                className={`object-cover object-center transition duration-500 ${
                  isImageHovered ? "scale-105" : "scale-100"
                }`}
              />

              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black to-transparent" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative inline-block overflow-hidden rounded-3xl">
                <span
                  className="relative z-10 block font-[family-name:var(--font-inter)] text-8xl font-black leading-none uppercase transition-colors"
                >
                  FULLSTACK <br /> DEVELOPER
                </span>
              </div>

              <span className="font-[family-name:var(--font-inter)] text-2xl font-semibold text-neutral-500">
                First-year Computer Science student.
              </span>
            </div>
          </div>
        </div>

        <TechStackSlider />
      </div>

      <Projects />
    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { FaBars, FaTimes } from "react-icons/fa";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className={`${inter.variable} flex min-h-screen w-full flex-col items-center bg-black font-poppins text-white`}
    >
      {/* Navigation Header */}
      <div className="m-2 sm:m-4 flex h-16 sm:h-[72px] w-[95%] sm:w-[90%] items-center justify-between gap-4 sm:gap-8 md:gap-16 lg:gap-64 rounded-2xl border border-white/50 pr-4 sm:pr-8 text-white">
        <LiquidNameTag active={isImageHovered} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-34">
          <Link href="/" className="hover:text-white/70 transition-colors">
            Home
          </Link>
          <Link href="/" className="hover:text-white/70 transition-colors">
            About
          </Link>
          <Link href="/" className="hover:text-white/70 transition-colors">
            Projects
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-40 flex items-center justify-center">
          <div className="flex flex-col items-center gap-8 text-white text-2xl">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white/70 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white/70 transition-colors"
            >
              About
            </Link>
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white/70 transition-colors"
            >
              Projects
            </Link>
          </div>
        </div>
      )}

      <div className="flex min-h-2/10 w-full flex-col">
        {/* Hero Section */}
        <div className="flex min-h-[70vh] w-full items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 max-w-7xl">
            {/* Profile Image */}
            <div
              className="relative h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] overflow-hidden bg-black shrink-0"
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

            {/* Text Content */}
            <div className="flex flex-col gap-3 sm:gap-4 text-center md:text-left">
              <div className="relative inline-block overflow-hidden rounded-lg py-2 pr-12">
                <span className="relative z-10 block font-[family-name:var(--font-inter)] text-3xl sm:text-4xl md:text-5xl lg:text-2xl xl:text-8xl font-bold leading-none uppercase transition-colors">
                  I'm a CSE (AI) student focused on building modern web
                  applications, with strong frontend experience and growing
                  backend skills.
                </span>
              </div>

              <span className="font-[family-name:var(--font-inter)] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-neutral-500">
                First-year Computer Science student.
              </span>
            </div>
          </div>
        </div>

        <TechStackSlider />
      </div>

      <div className="w-full block">
        <Projects />
      </div>

      <div className="flex items-center justify-center text-8xl text-white h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        Let&apos;s build Together
      </div>
    </div>
  );
}

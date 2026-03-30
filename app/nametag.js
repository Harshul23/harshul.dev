"use client";

export default function LiquidNameTag({ active = false }) {
  return (
    <button
      className={`relative z-10 rounded-xl sm:rounded-2xl bg-transparent px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide transition-all ${
        active ? "border-transparent" : "border-white/20"
      }`}
    >
      <span
        className={`relative z-50 transition-colors ${
          active
            ? "text-black font-black font-[family-name:var(--font-inter)] text-sm sm:text-base md:text-lg lg:text-xl duration-200"
            : "text-white font-black font-[family-name:var(--font-inter)] text-sm sm:text-base md:text-lg lg:text-xl duration-100"
        }`}
      >
        HARSHUL
      </span>

      <span className="pointer-events-none absolute inset-0 z-40">
        <span
          className={`absolute left-1/2 top-1/2 py-6 sm:py-7 md:py-9 ${
            active ? "liquid-blob bg-white opacity-100" : "liquid-blob-idle"
          }`}
        />
      </span>
    </button>
  );
}
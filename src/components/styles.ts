// Shared utility lists keep the site's repeated typography and controls consistent.
export const container = "mx-auto w-full max-w-[1200px] px-5 xl:px-[15px]";
export const heading = "font-serif font-normal leading-[1.2]";
export const h1 = `${heading} text-[42px] tracking-[-2px] md:text-[52px] xl:text-[67px]`;
export const h2 = `${heading} text-[32px] tracking-[-1px] xl:text-[40px]`;
export const lead = "text-[20px] leading-normal tracking-normal";
export const inlineLink = "underline hover:opacity-70";
export const button =
  "inline-flex items-center justify-center gap-2.5 rounded-lg border px-[22px] py-3 text-base font-medium tracking-[-0.16px] whitespace-nowrap transition-[background-color,color] duration-200 ease-[ease]";
export const whiteButton = `${button} border-white bg-white text-teal hover:border-sage hover:bg-sage`;
export const darkButton = `${button} border-teal bg-teal text-white hover:bg-[#285456]`;
export const prose = "tracking-[-0.16px] [&_p+p]:mt-2.5";

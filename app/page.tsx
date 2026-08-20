"use client";
import Image from "next/image";
import Link from "next/link";
import LinkPreview from "@/app/components/link-preview";
import { useEffect, useState } from "react";
import { useAnimate } from "motion/react";

const LINKS = {
  kerala: "https://www.google.com/search?q=kerala&ie=UTF-8",
  twitter: "https://x.com/aadhi_tsx",
  linkedin: "https://www.linkedin.com/in/adarsh--anilkumar/",
  youtube: "https://www.youtube.com/@th3atcodeguy",
} as const;

const linkStyles =
  "underline decoration-dotted decoration-[1.3px] underline-offset-4 transition-opacity duration-150 ease-(--ease-out-strong) [@media(hover:hover)]:hover:opacity-70 decoration-black/20";

const paragraphStyles = "font-inter text-[14px] font-medium text-black";

const SELECTION_COLOR: Array<string> = [
  "#67E1FF",
  "#53FF9D",
  "#C267FF",
  "#EBFF67",
  "#FF8367",
  "#E2E2E2",
];

export default function Home() {
  const [selectionColor, setSelectionColor] = useState<string>("");
  const [, animate] = useAnimate();

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % SELECTION_COLOR.length;

      animate(
        document.documentElement,
        {
          "--selection-color": SELECTION_COLOR[index],
        },
        {
          duration: 1,
          ease: "easeInOut",
        },
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [animate]);
  return (
    <div
      className="flex items-center justify-center w-full min-h-screen bg-white"
      style={
        {
          "--selection-color": selectionColor,
        } as React.CSSProperties
      }
    >
      <div className="flex flex-col items-start justify-center w-2xl h-screen gap-5">
        <div className="flex flex-col gap-5 w-full" id="head">
          <div className="flex items-center justify-center w-11.25 aspect-square bg-black/10">
            <Image
              src="/avatar.png"
              alt="Adarsh Anilkumar"
              width={100}
              height={100}
              sizes="100px"
              priority
              draggable={false}
              unoptimized
              className="overflow-hidden"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-full font-inter font-medium">
            <h3 className="text-black text-[14.5px]">Adarsh Anilkumar</h3>
            <p className="text-black/40 font-devanagari">/ आदर्श</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-auto gap-5 text-[14.5px] font-inter font-medium">
          <p className="text-black">
            A software engineer, designer, and aspiring DevOps engineer, born
            and raised in Kerala.
          </p>
          <p className="text-black">
            After two years as a freelance designer and frontend developer, I am
            now transitioning into Cloud and DevOps. Moving from crafting
            interfaces to engineering the systems behind them.
          </p>
          <p className="text-black">
            I enjoy working with cloud infrastructure, automation, and
            deployment systems that power modern applications. I’m particularly
            interested in DevOps, cloud platforms, CI/CD, infrastructure as
            code, monitoring, and system reliability.
          </p>
          <p className="text-black">
            My goal is to build infrastructure that is stable, scalable, secure,
            resilient, and performant. I enjoy automating repetitive processes,
            improving deployment workflows, designing for fault tolerance, and
            ensuring systems remain reliable as they grow.
          </p>
          <span className={paragraphStyles}>
            Beyond my work, I share what I learn through programming, design,
            and DevOps on{" "}
            <LinkPreview url={LINKS.youtube} name="YouTube" image="" />,
            documenting projects, experiments, and lessons as I grow. This
            portfolio is a collection of that journey—the things I build, learn,
            and explore.
          </span>
          <p className={paragraphStyles}>
            Feel free to reach out to me at{" "}
            <Link
              href={LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              @aadhi_tsx
            </Link>{" "}
            or connect with me on{" "}
            <Link
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              LinkedIn
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

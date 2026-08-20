"use client";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

interface Preview {
  name: string;
  url: string;
  image: string;
}

const previewAnimationVariant = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.96,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
};

export default function LinkPreview({ name, url }: Preview) {
  const [hovered, setHovered] = useState(false);

  return (
    <span className="relative inline-flex align-baseline">
      <motion.span
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-black underline decoration-dotted decoration-black/20 underline-offset-4 transition-colors duration-300 hover:text-black/70"
        >
          {name}
        </Link>
      </motion.span>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute left-1/2 top-full z-50 mt-2 h-25 w-43.75 -translate-x-1/2 rounded-md bg-black shadow-xl overflow-hidden"
            variants={previewAnimationVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 28,
              mass: 0.8,
            }}
          >
            <video width="175" height="100" autoPlay muted loop playsInline>
              <source src="/youtube.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";

interface Props {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  trigger?: "load" | "view";
  children?: ReactNode;
}

export default function WordReveal({
  text,
  as = "h2",
  className = "",
  delay = 0,
  stagger = 0.06,
  trigger = "view",
}: Props) {
  const words = text.split(" ");
  const Tag = motion[as];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const motionProps =
    trigger === "load"
      ? { initial: "hidden", animate: "visible" }
      : { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } };

  return (
    <Tag variants={container} className={className} {...motionProps}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          style={{ display: "inline-block", whiteSpace: "pre", willChange: "transform, opacity, filter" }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Tag>
  );
}

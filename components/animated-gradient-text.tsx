"use client";

import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
}

export function AnimatedGradientText({ text, className }: AnimatedGradientTextProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <span
      ref={ref}
      className={cn(
        "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent inline-block bg-[size:400%] transition-all duration-700",
        isVisible ? "animate-gradient" : "opacity-0",
        className
      )}
    >
      {text}
    </span>
  );
}
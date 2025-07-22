"use client";

import { motion, useAnimationFrame } from "framer-motion";
import React, { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";

const images = [
  "/logos/nodejs.png",
  "/logos/nextjs.png",
  "/logos/tailwindcss.png",
  "/logos/php.png",
  "/logos/reactjs.png",
  "/logos/sanity.png",
  "/logos/prisma.png",
  "/logos/nestjs.svg",
  "/logos/typescript.png",
  "/logos/github.png",
];

export function Ticker({ speed = 100 }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [x, setX] = useState(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setWidth(contentRef.current.scrollWidth / 2);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    const moveBy = (delta / 1000) * speed;
    setX((prev) => {
      const next = prev - moveBy;
      if (Math.abs(next) >= width) return 0;
      return next;
    });
  });

  return (
    <div className="bg-background relative mt-8 overflow-hidden border-t border-b py-8">
      <div className="relative flex whitespace-nowrap" ref={containerRef}>
        <motion.div
          className="flex items-center gap-8 px-4"
          style={{ x }}
          ref={contentRef}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="flex h-10 w-20 shrink-0 items-center justify-center"
            >
              <Image
                src={src}
                alt={`logo-${i}`}
                className="h-full w-full object-contain"
                loading="lazy"
                width={200}
                height={200}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

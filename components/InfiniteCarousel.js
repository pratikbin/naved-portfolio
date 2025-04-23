"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";


const InfiniteCarousel = ({
  children,
  className = "",
  direction = "horizontal",
  speed = 70,
  gap = 40,
  pauseOnHover = true,
}) => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: direction === "horizontal" ? "-100%" : 0,
      y: direction === "vertical" ? "-100%" : 0,
      transition: {
        duration: speed,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [direction, speed, controls]);

  return (
    <div
      className={`relative flex overflow-hidden ${
        direction === "vertical" ? "flex-col" : ""
      } ${className}`}
    //   onMouseEnter={() => pauseOnHover && controls.stop()}
    //   onMouseLeave={() => {
    //     if (pauseOnHover) {
    //       controls.start({
    //         x: direction === "horizontal" ? "-100%" : 0,
    //         y: direction === "vertical" ? "-100%" : 0,
    //         transition: {
    //           duration: speed,
    //           ease: "linear",
    //           repeat: Infinity,
    //           repeatType: "loop",
    //         },
    //       });
    //     }
    //   }}
    >
      <div
        className={`flex ${direction === "vertical" ? "flex-col" : ""}`}
        style={{ gap: `${gap}px` }}
      >
        <motion.div
          className={`flex ${direction === "vertical" ? "flex-col" : ""}`}
          style={{ gap: `${gap}px` }}
          animate={controls}
          initial={{ x: 0, y: 0 }}
        >
          {children}
        </motion.div>

        <motion.div
          className={`flex ${direction === "vertical" ? "flex-col" : ""}`}
          style={{ gap: `${gap}px` }}
          animate={controls}
          initial={{ x: 0, y: 0 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export { InfiniteCarousel };
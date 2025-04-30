"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";

import { cn } from "../../lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative h-14 w-52 overflow-hidden p-[2px]",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
        background: "linear-gradient(135deg, #fafafa, #e0e0e0)", // lighter, softer
      }}
      {...otherProps}
    >
      {/* Moving Sparkle Border */}
      <div className="absolute inset-0">
        <MovingBorder
          duration={duration}
          rx="20"
          ry="20"
          borderRadius={borderRadius}
        >
          {/* Soft moving glow */}
          <div
            className={cn(
              "h-3 w-3 rounded-full bg-white opacity-80 shadow-[0_0_6px_3px_white]"
            )}
          />
        </MovingBorder>
      </div>

      {/* Button Content */}
      <div
        className={cn(
          "relative z-10 flex h-full w-full items-center justify-center gap-2 border-[1.5px] border-gray-700 bg-gray-100 font-medium text-lg text-black backdrop-blur-md transition-all duration-300 hover:bg-white hover:shadow-md",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.92)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 4000, // slight slow down to make movement smooth
  rx,
  ry,
  borderRadius,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  borderRadius: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => {
    const length = pathRef.current?.getTotalLength() ?? 0;
    const point = pathRef.current?.getPointAtLength(val);
    if (point) {
      return point.x;
    }
    return 0;
  });

  const y = useTransform(progress, (val) => {
    const length = pathRef.current?.getTotalLength() ?? 0;
    const point = pathRef.current?.getPointAtLength(val);
    if (point) {
      return point.y;
    }
    return 0;
  });

  const transform = useMotionTemplate`translate(${x}px, ${y}px) translate(-50%, -50%)`;

  return (
    <>
      {/* Invisible path */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          stroke="transparent" // hide the rect
          strokeWidth="2"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>

      {/* Moving Glow */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

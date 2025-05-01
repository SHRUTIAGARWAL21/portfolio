"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [clickedCardIndex, setClickedCardIndex] = useState(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const handleCardClick = (index) => {
    setClickedCardIndex(index === clickedCardIndex ? null : index);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn(
              "relative w-[100px] flex-shrink-0 bg-gray-50 rounded-lg border border-gray-200 p-3 flex flex-col items-center",
              "transition-all duration-300 ease-in-out",
              "hover:shadow-lg hover:scale-110 hover:bg-gray-100 hover:border-blue-500",
              clickedCardIndex === idx &&
                "ring-2 ring-blue-500 scale-110 shadow-lg bg-blue-50"
            )}
            key={idx}
            onClick={() => handleCardClick(idx)}
          >
            <img
              src={item.img}
              alt={item.title}
              className={cn(
                "h-16 w-16 object-contain",
                "transition-transform duration-300",
                clickedCardIndex === idx && "scale-110"
              )}
            />
            <span
              className={cn(
                "mt-1 text-xs font-medium text-center",
                clickedCardIndex === idx ? "text-blue-700" : "text-gray-700"
              )}
            >
              {item.title.trim()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

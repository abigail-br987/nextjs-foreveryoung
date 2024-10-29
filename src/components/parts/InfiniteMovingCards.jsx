import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
  }) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);
    const [start, setStart] = useState(false);
  
    useEffect(() => {
      addAnimation();
    }, []);
  
    const addAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current.appendChild(duplicatedItem);
        });
  
        setAnimationProperties();
        setStart(true);
      }
    };
  
    const setAnimationProperties = () => {
      if (containerRef.current) {
        const animationDirection = direction === "left" ? "forwards" : "reverse";
        const animationDuration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
  
        containerRef.current.style.setProperty("--animation-direction", animationDirection);
        containerRef.current.style.setProperty("--animation-duration", animationDuration);
      }
    };
  
    return (
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-0 w-full max-w-full overflow-hidden bg-deep_green border-2 border-dark_blue",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex shrink-0 gap-4 py-6 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item) => (
            <li
              key={item.name}
              className="w-[350px] max-w-full relative flex-shrink-0 p-6 md:w-[450px]"
              style={{
                background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none bg-white border-2
                   border-dark_blue rounded-lg -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <p className="relative z-20">
                  "{item.quote}"
                </p>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col">
                    <h2>
                      {item.name}
                    </h2>
                    <p>
                    {item.title}
                    </p>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
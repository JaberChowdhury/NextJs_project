"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import clsx from "clsx";

interface CustomCursorWrapperProps {
  children: ReactNode;
  projectName: string;
  color?: string;
}

export default function Cursoreffect({
  children,
  projectName,
  color = "#3498db",
}: CustomCursorWrapperProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Track cursor position + click state
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setCursorPos({ x: e.clientX, y: e.clientY });

    const handleMouseDown = () => isHovering && setIsClicking(true);
    const handleMouseUp = () => isHovering && setIsClicking(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.classList.remove("hide-native-cursor");
    };
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    document.body.classList.add("hide-native-cursor");
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsClicking(false);
    document.body.classList.remove("hide-native-cursor");
  };

  return (
    <>
      {/* Custom Cursor Circle */}
      <div
        className={clsx(
          "fixed pointer-events-none z-9998 transition-transform duration-150 ease-out",
          isHovering ? "block" : "hidden",
          isClicking ? "scale-90" : "scale-110",
        )}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
          width: "32px",
          height: "32px",
          backgroundImage:
            isClicking || isHovering
              ? "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMHSURBVHgB7VZfSFNRGP/O3XUZQiFupgapIYXuJRi9FIJQUAQ+WvSSFj2V2oqgiMD5Ug9B+SDWS+WCEehbDiL0Yf3xSVb5kn9xU6KrXjdbudTdP6fvzC3GbDt3a0WgP/i4954/9/y+3/d95xyAbWxjq4Pw+i2OYAcBoRLfX8tdxS58UvhXBCxXglcJEe4nNQXQOpFIL+QJQroOp9MpEKCHUpqr0J5aHct+tBZK/1yMTAoIpa3SNSoW3sswJoDWaQLwzncVByDPBEwVF0ZqlF0148BHgILuUlTFFe4u80MWyBQC+uXJ4QCGYRb4qMJE7TCLO2asjmDvntb5ajAIXhUUWNukB2AqvAxZAxUBwfmVExoBOH8h2soLyAlCcwGAP6bI9fSK8AjQyOeRUXyEIWcIzbqaPjTcjQhYGNrlIRDEesgLdJfcVXIe4hsaV4GGhgYMQ3QA8gah2doebPn1xRvu9XqpKTKbRwIoq77+LbE2lwBCL3p3zm+wHDnAXFLXeha7KzxY5htkDMxiY0Rr2wKWozmHckRo0WFQfnhWPrndq29uL2FYFVRWY4xEA9NZsuhkLTRAi8qME9CUYdDW334fffxwbdgZKi8v11clSW1qatL6+vp0QghNeMcFO5h63h+w0v0nJ3DK7kxjaTTySFuecotDpz/KsqwzKna7Xff5fDGPIeU4N0QgPs6M5TiYqRwJ1efUSffR0Mv2JbYwmh63GLffzTGShInJ3HLE5L6Diy+iYlH8VOMkNnmdCwHA2OlaaDItAeZ9oaf+GS6uoulg8OZkNASJseZSR2iCAqlM7TTJPtve8RtTGGvV6OIMhhVgP62rq6NUUzypHRga97z7+ExjY2NCcsPIRgEGU+mlqWPUbHmV3CgujNUelG5NJ2obsoCRfSAZsdOxqPrEHCXCvliLErkrPT/ilzayPa835s2rU0qwpgtKzgzWWi6OnS1u+XAKm3diguK1MGs1Y8hKgfjupdrh5nQ4HJ5RVZUsY6nZbDba39//d71PBlOC8WE7JOTo+X+Dn3WSSPknT3FjAAAAAElFTkSuQmCC')"
              : "none",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Floating Label */}
      <div
        className={clsx(
          "fixed pointer-events-none z-9999 rounded-full px-4 py-2 font-semibold text-white text-sm shadow-lg transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0",
        )}
        style={{
          left: `${cursorPos.x + 20}px`,
          top: `${cursorPos.y + 30}px`,
          backgroundColor: color,
          transform: "translate(-50%, -50%)",
        }}
      >
        {projectName}
      </div>

      {/* Hover Wrapper */}
      <div
        ref={wrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-none"
      >
        {children}
      </div>
    </>
  );
}

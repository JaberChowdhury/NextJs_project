"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  // Set initial time to null or empty to prevent mismatch on SSR
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const d = date.toLocaleTimeString();
      setTime(d);
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-t text-[12px] mx-16 lg:text-sm border-t-slate-950 w-full flex items-end justify-end p-3 py-6 text-slate-600">
      <div className="w-4/5 flex justify-between items-center pr-10">
        <div className="left-28">Reach out</div>
        <div>Mahtabul Shourav © 2025</div>
        {/* Only render the time if it's set */}
        <div className="lg:text-base">{time ? time : "Loading time..."}</div>
      </div>
    </div>
  );
};

export default Footer;

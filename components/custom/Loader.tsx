import React from "react";

const Loader = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-wrap">
      <span className="relative flex size-32 top-[-40px]">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full size-32 bg-slate-500"></span>
      </span>
    </div>
  );
};

export default Loader;

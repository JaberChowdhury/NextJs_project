import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <Image
        src="https://media-hosting.imagekit.io/39d763d847c94ed9/Hero%20Iamge.jpg"
        width={1920}
        height={1080}
        alt="hero"
        className="w-full"
        unoptimized={true} // Bypass Next.js optimization
      />
    </div>
  );
};

export default Hero;
// hero image https://ibb.co.com/QFwp6zCb

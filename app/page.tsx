import Featured from "@/components/Featured";
// import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
import Hotdeal from "@/components/Hotdeal";
import Instagram from "@/components/Instagram";
import Latestdeal from "@/components/Latestdeal";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center flex-col *:my-32">
      {/* <Hero /> */}
      <Featured />
      <Services />
      <Hotdeal />
      <Instagram />
      <Latestdeal />
      {/* <Footer /> */}
    </div>
  );
};

export default page;

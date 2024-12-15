import SparklesText from "@/ui/sparkles-text";
import ShinyButton from "@/ui/shiny-button";
import Ripple from "@/ui/ripple";
import ParticlesDemo from "@/components/custom/Backgroundanimation";

const App = () => {
  return (
    <div className="relative">
      <div className="w-full min-h-screen flex justify-center items-center relative flex-col">
        <SparklesText text="ColorOcean" />
        <Ripple />
        <div className="gap-3 *:m-4 my-6 ">
          <ShinyButton className="border-2">Learn more</ShinyButton>
          <ShinyButton className="border-2">Tools</ShinyButton>
        </div>
      </div>
      <ParticlesDemo />
    </div>
  );
};

export default App;

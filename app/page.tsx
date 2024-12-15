import SparklesText from "@/ui/sparkles-text";
import ShinyButton from "@/ui/shiny-button";
import Ripple from "@/ui/ripple";
import Link from "next/link";

const App = () => {
  return (
    <div className="relative">
      <div className="w-full min-h-screen flex justify-center items-center relative flex-col">
        <SparklesText text="ColorOcean" />
        <Ripple />
        <div className="gap-3 *:m-4 my-6 ">
          <Link href="/tools">
            <ShinyButton className="border-2">Tools</ShinyButton>
          </Link>
          <Link href="/colors">
            <ShinyButton className="border-2">colors</ShinyButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;

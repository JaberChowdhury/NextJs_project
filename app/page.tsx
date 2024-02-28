import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription } from "@/components/ui/card";
import BoxAnimation from "@/components/BoxAnimation";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full overflow-hidden z-10 min-h-[80vh] flex justify-center items-center flex-col relative gap-y-6">
      <CardTitle className="text-6xl">Color Web</CardTitle>
      <CardDescription className="text-center">
        Color Web is a website to play with color using free built in tools
        where you can generate a bunch of theme color scheme and many more.
      </CardDescription>
      <Link href="/tools">
        <Button className="mt-20">More</Button>
      </Link>
      <BoxAnimation />
    </div>
  );
};

export default Home;

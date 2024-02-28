import ModeToggle from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Navbar = () => {
  return (
    <nav className="w-full z-50 rounded flex justify-between items-center sticky top-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ">
      <div className="flex justify-center items-center font-bold md:text-4xl">
        Color <Card className="rounded p-1 shadow-none">Web</Card>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;

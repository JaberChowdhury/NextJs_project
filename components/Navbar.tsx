import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import ModeToggle from "./ModeToggle";
const Navbar = () => {
  return (
    <nav className="w-full p-2 sticky top-0 flex justify-around items-center">
      <Card className="font-bold pl-2 flex justify-between items-center">
      <span className="mr-2">Color</span> <Button className="font-bold py-1 m-0">Web</Button>
      </Card>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;

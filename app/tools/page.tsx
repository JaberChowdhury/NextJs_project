import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  const ListData = [
    {
      id: 1,
      title: "Colors",
      to: "/colors",
      description: "Choose your favourite color from the ocean",
    },
    {
      id: 2,
      title: "Rgb color generator",
      to: "/tool/rgbgenerator",
      description:
        "Generate rgb color with we made tool with so many features.",
    },
  ];

  return (
    <div className="w-full gap-2 grid md:grid-cols-2 relative">
      {ListData.map((data) => (
        <Card className="w-full relative" key={data.id}>
          <CardHeader>
            <CardTitle>{data.title}</CardTitle>
            <CardDescription>{data.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href={data.to}>
              <Button>Explore</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Home;

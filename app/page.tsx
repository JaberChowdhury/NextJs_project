import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Button className="my-4">Aweome nextjs project</Button>
      <Link href="/surah">
        <Button className="my-4">Read surah</Button>
      </Link>
    </div>
  );
};

export default Home;

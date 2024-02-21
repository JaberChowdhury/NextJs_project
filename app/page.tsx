import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Button className="my-4">Aweome nextjs project</Button>
      <Button variant="destructive" className="my-4">
        Aweome nextjs project
      </Button>
      <Button variant="outline" className="my-4">
        Aweome nextjs project
      </Button>
      <Button variant="secondary" className="my-4">
        Aweome nextjs project
      </Button>
      <Button variant="ghost" className="my-4">
        Aweome nextjs project
      </Button>
      <Button variant="link" className="my-4">
        Aweome nextjs project
      </Button>
    </div>
  );
};

export default Home;

import Link from "next/link";

const Home = () => {
  const Items = [
    {
      title: "Tools",
      to: "/tools",
    },
    {
      title: "More",
      to: "/more",
    },
    {
      title: "Codes",
      to: "/codes",
    },
  ];

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Color web</h1>
          <p className="py-6">
            A platform with so many awesome tool to play with colors .
            <b>Unleash</b> the power of colors from core !!{" "}
            <b>Generate, convert, mix </b> the colors from the various aspects.
          </p>
          <div className="flex justify-center  items-center gap-x-2">
            {Items.map((item) => (
              <Link key={item.title} href={item.to}>
                <button className="btn btn-primary">{item.title}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

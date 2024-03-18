import tools from "@/constant/tools";
import Link from "next/link";

const Tools = () => {
  return (
    <div>
      {tools.map((tool) => (
        <div
          key={tool}
          className="card card-compact w-96 bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">{tool.toUpperCase()}</h2>
            <div className="card-actions justify-end">
              <Link href={`/tools/${tool}`}>
                <button className="btn btn-primary">See more</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;

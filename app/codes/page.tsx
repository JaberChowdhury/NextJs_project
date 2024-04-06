import codes from "@/constant/codes";
import Link from "next/link";

const Tools = () => {
  return (
    <div>
      {codes.map((tool) => (
        <div
          key={tool.path}
          className="card card-compact w-96 bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">{tool.title.toUpperCase()}</h2>
            <div className="card-actions justify-end">
              <Link href={tool.path}>
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

import useColors from "@/hooks/useColors";
import Link from "next/link";
import Addcolor from "@/components/Addcolor";

const Tools = () => {
  const colors = useColors(600);

  return (
    <div className="w-full z-10 min-h-screen grid grid-cols-2 md:grid-cols-4 justify-center items-center">
      {colors.map((color) => (
        <div
          key={color.id}
          className="w-[150px] h-10 border border-slate-100 m-2 flex justify-between items-center rounded overflow-hidden relative"
        >
          <div
            className="w-6 h-full absolute left-0 "
            style={{
              backgroundColor: color.hexa.main.string,
            }}
          />
          <Link
            className="ml-7"
            href={`/more/colors/${color.hexa.main.r + color.hexa.main.g + color.hexa.main.b}`}
          >
            {color.hexa.main.string.toUpperCase()}
          </Link>
          <Addcolor
            data={{
              color: color.hexa.main.string,
              id: crypto.randomUUID(),
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Tools;

import generateColors from "@/hooks/generateColors";
import { Colorinfo, Coloradd } from "@/components/Coloraction";
import Link from "next/link";

const Colors = async () => {
  const colors = await generateColors(100);

  return (
    <div>
      <div>Colors</div>
      <div className="w-full gap-x-2 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7">
        {colors.map((data) => {
          const colorpathmain = data.hexa.main.string.slice(1);
          const colorpathopposite = data.hexa.opposite.string.slice(1);
          return (
            <div
              key={data.id}
              className="w-full border-2 p-2 m-2 rounded flex justify-between items-center relative"
            >
              <div className="grid grid-cols-1 gap-2">
                <Link href={`/colors/${colorpathmain}`}>
                  <div
                    className="w-24 text-center p-1 font-bold rounded"
                    style={{
                      backgroundColor: data.hexa.main.string,
                      color: data.hexa.opposite.string,
                    }}
                  >
                    {data.hexa.main.string}
                  </div>
                </Link>
                <Link href={`/colors/${colorpathopposite}`}>
                  <div
                    className="w-24 text-center p-1 font-bold rounded"
                    style={{
                      backgroundColor: data.hexa.opposite.string,
                      color: data.hexa.main.string,
                    }}
                  >
                    {data.hexa.opposite.string}
                  </div>
                </Link>
              </div>
              <div className="flex font-bold px-2 justify-center gap-2 items-center flex-col relative">
                <Colorinfo color={data.hexa.main.string} />
                <Coloradd />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;

import utils from "@/lib/utils";
import Link from "next/link";

interface propsType {
  color: string;
}

const Colordisplay = ({ color }: propsType) => {
  const utility = new utils("#" + color);
  const data = utility.getColor();

  return (
    <div className="w-full">
      <div
        style={{
          backgroundColor: data.hexa.main.string,
        }}
        className="w-full h-[200px] rounded shadow-md"
      />
      <div
        style={{
          backgroundColor: data.hexa.opposite.string,
        }}
        className="w-full h-[20px] my-2 rounded shadow-md"
      />
      <div className="w-full [&>*]:m-1 flex justify-center items-center relative">
        <div
          style={{
            backgroundColor: data.hexa.main.string,
            color: data.hexa.opposite.string,
          }}
          className="w-full h-20 rounded flex justify-center items-center"
        >
          {data.hexa.main.string}
        </div>
        <Link
          style={{
            backgroundColor: data.hexa.opposite.string,
            color: data.hexa.main.string,
          }}
          className="w-full h-20 rounded flex justify-center items-center"
          href={`/more/colors/${data.hexa.opposite.string.replace("#", "")}`}
        >
          {data.hexa.opposite.string}
        </Link>
      </div>
    </div>
  );
};

export default Colordisplay;

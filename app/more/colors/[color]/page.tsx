import dynamic from "next/dynamic";
const Code = dynamic(() => import("@/components/Code"));
const HexaComponent = dynamic(() => import("@/components/HexaComponent"));
const HslComponent = dynamic(() => import("@/components/HslComponent"));
const RgbComponent = dynamic(() => import("@/components/RgbComponent"));
const Colordisplay = dynamic(() => import("@/components/Colordisplay"));
const Colorvariant = dynamic(() => import("@/components/Colorvariant"));

interface propsType {
  params: {
    color: string;
  };
}

const Tools = async ({ params }: propsType) => {
  const req = await fetch(`http://localhost:5173//api/colors/${params.color}`);
  const res = await req.json();
  const { data, mainRgb, mainHsl, oppositeRgb, oppositeHsl } = await res;

  return (
    <div className="w-full min-h-screen my-4 flex justify-center flex-col gap-y-6">
      <Colordisplay color={params.color} />
      <Colorvariant color={"#" + params.color} />

      <b className="underline text-2xl">Analysis:</b>
      <RgbComponent title="main" data={mainRgb} />
      <RgbComponent title="opposite" data={oppositeRgb} />
      <HexaComponent title="main" data={params.color} />
      <HexaComponent
        title="opposite"
        data={data.hexa.opposite.string.replace("#", "")}
      />
      <HslComponent title="main" data={mainHsl} />
      <HslComponent title="opposite" data={oppositeHsl} />
      <Code hl={[8, 14, 22, 28, 36, 42]} code={JSON.stringify(data, null, 2)} />
    </div>
  );
};

export default Tools;

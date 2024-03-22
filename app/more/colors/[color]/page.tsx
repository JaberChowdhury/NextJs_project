import dynamic from "next/dynamic";
import useAnalyseColor from "@/hooks/useAnalyseColor";
const Code = dynamic(() => import("@/components/Code"));
const HexaComponent = dynamic(() => import("@/components/HexaComponent"));
const HslComponent = dynamic(() => import("@/components/HslComponent"));
const RgbComponent = dynamic(() => import("@/components/RgbComponent"));
const Colordisplay = dynamic(() => import("@/components/Colordisplay"));

interface propsType {
  params: {
    color: string;
  };
}

const Tools = ({ params }: propsType) => {
  const { data, mainRgb, mainHsl, oppositeRgb, oppositeHsl } = useAnalyseColor(
    "#" + params.color,
  );

  return (
    <div className="w-full min-h-screen my-4 flex justify-center flex-col gap-y-6">
      <Colordisplay color={params.color} />
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

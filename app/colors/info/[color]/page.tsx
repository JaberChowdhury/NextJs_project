import Card from "@/components/custom/Card";
import Codehighlighter from "@/components/custom/ColorHighlight";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import BlurFade from "@/components/ui/blur-fade";
import { CardHeader } from "@/components/ui/card";
import Utils from "@/lib/colorUtils/main";
import { GET_COLOR } from "@/lib/colorUtils/TYPES";

function ColorBox({ data }: { data: GET_COLOR }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="size-52"
        style={{ backgroundColor: data.hexadecimal.main.color }}
      ></div>
      <div
        className="size-52"
        style={{ backgroundColor: data.hexadecimal.opposite.color }}
      ></div>
    </div>
  );
}

function HslData({
  data,
}: {
  data: { h: number; s: number; l: number; color: string };
}) {
  const colorUtils = new Utils();
  const primaryColor = colorUtils.makeOppositeHexadecimal(
    colorUtils.makeHslToHexadecimal(data.h, data.s, data.l)
  ).color;
  return (
    <div className="w-full p-2 border flex justify-center items-center rounded-lg m-2 gap-2">
      <div className="w-full flex justify-between items-center flex-col">
        <AnimatedCircularProgressBar
          max={360}
          value={Math.round(Number(data.h))}
          gaugePrimaryColor={primaryColor}
          gaugeSecondaryColor={data.color}
          className="size-14 text-xl"
        />
        <div>Hue</div>
      </div>
      <div className="w-full flex justify-between items-center flex-col">
        <AnimatedCircularProgressBar
          value={Math.round(Number(data.s))}
          gaugePrimaryColor={primaryColor}
          gaugeSecondaryColor={data.color}
          className="size-14 text-xl"
        />
        <div>Saturation</div>
      </div>
      <div className="w-full flex justify-between items-center flex-col">
        <AnimatedCircularProgressBar
          value={Math.round(Number(data.l))}
          gaugePrimaryColor={primaryColor}
          gaugeSecondaryColor={data.color}
          className="size-14 text-xl"
        />
        <div>Lightness</div>
      </div>
    </div>
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ color: string }>;
}) {
  const color = (await params).color;
  const colorUtils = new Utils("#" + color);
  const data = colorUtils.getColor();

  return (
    <div className="px-2">
      <BlurFade>
        <CardHeader className="text-2xl font-bold">Color:</CardHeader>
      </BlurFade>

      <div className="w-full grid md:grid-cols-2 p-2">
        <ColorBox data={data} />
        <div className="w-full flex justify-center items-center flex-col">
          <HslData data={data.hsl.main} />
          <HslData data={data.hsl.opposite} />
        </div>
      </div>

      <BlurFade>
        <CardHeader className="text-2xl font-bold">Color varients:</CardHeader>
      </BlurFade>
      <div className="w-full flex justify-center items-center flex-wrap">
        {data.variant.map((colorVariant, id) => (
          <Card
            key={id}
            id={id}
            main={colorVariant.main.color}
            opposite={colorVariant.opposite.color}
          />
        ))}
      </div>
      <BlurFade>
        <CardHeader className="text-2xl font-bold">JSON code:</CardHeader>
      </BlurFade>
      <Codehighlighter
        code={JSON.stringify({ ...data, variant: [] }, null, 2)}
      />
    </div>
  );
}

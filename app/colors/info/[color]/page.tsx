import Card from "@/components/custom/Card";
import BlurFade from "@/components/ui/blur-fade";
import { CardHeader } from "@/components/ui/card";
import Utils from "@/lib/colorUtils/main";

export default async function Page({
  params,
}: {
  params: Promise<{ color: string }>;
}) {
  const color = (await params).color;
  const colorUtils = new Utils("#" + color);
  const data = colorUtils.getColor();

  return (
    <div className="px-8">
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
    </div>
  );
}

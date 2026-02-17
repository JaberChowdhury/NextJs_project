import Card from "@/components/custom/ColorCard";
import Utils from "@/lib/colorUtils/main";
export default function Home() {
  const u = new Utils();

  const c = u.generateColors(126);

  return (
    <div className="w-full justify-around flex flex-wrap">
      {c.map((each_color, id) => {
        const main_color = u.makeHexToMaterialYou(each_color.main.color);
        const opposite_color = u.makeHexToMaterialYou(
          each_color.opposite.color,
        );
        return (
          <Card
            materialSource={each_color.main.color}
            key={id}
            main={main_color.sourceColor}
            opposite={opposite_color.sourceColor}
            id={id}
          />
        );
      })}
    </div>
  );
}

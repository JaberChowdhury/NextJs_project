import { useTheme } from "next-themes";
import { MagicCard } from "@/ui/magic-card";

type propsType = {
  main: string;
  opposite: string;
  key: number;
};

function Card({ main, opposite, key }: propsType) {
  const { theme } = useTheme();
  return (
    <div
      key={key}
      className={"flex size-32 m-2 flex-col gap-4 lg:h-[250px] lg:flex-row"}
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Magic
      </MagicCard>
    </div>
  );
}
export default Card;

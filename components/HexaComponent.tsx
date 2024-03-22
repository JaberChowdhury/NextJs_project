import { cn } from "@/lib/cn";

interface propsType {
  title: string;
  data: string;
}

const HexaComponent = ({ title, data }: propsType) => {
  const dataArray = data.split("");
  const HexadecimalCode = "01234567+89abcdef".split("").reverse();

  return (
    <div className="w-full">
      <div className="font-bold text-xl my-2">HEXA {title}:</div>
      <div className="w-full flex md:justify-between flex-col md:flex-row overflow-y-scroll pl-6 md:items-center relative">
        {dataArray.map((data, index) => (
          <ul key={index} className="steps md:steps-vertical">
            <li
              data-content={data}
              className="step step-success font-bold uppercase"
            ></li>
            {HexadecimalCode.map((digit) => (
              <li
                key={digit}
                data-content={digit}
                className={`step ${data === digit ? "step-warning font-bold" : digit === "+" ? "step-info" : "step-neutral"}`}
              ></li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default HexaComponent;

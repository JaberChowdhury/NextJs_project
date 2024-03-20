interface propsType {
  title: string;
  data: string;
}

const HexaComponent = ({ title, data }: propsType) => {
  const dataArray = data.split("");
  const HexadecimalCode = "0123456789abcdef".split("").reverse();

  return (
    <div className="w-full">
      <div className="font-bold text-xl my-2">HEXA {title}:</div>
      <div className="w-full flex justify-between pl-6 items-center relative">
        {dataArray.map((data, index) => (
          <ul key={index} className="steps steps-vertical overflow-hidden">
            <li
              data-content={data}
              className="step step-success font-bold uppercase"
            ></li>
            {HexadecimalCode.map((digit) => (
              <li
                key={digit}
                data-content={digit}
                className={`step ${data === digit ? "step-info font-bold" : "step-neutral"}`}
              ></li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default HexaComponent;

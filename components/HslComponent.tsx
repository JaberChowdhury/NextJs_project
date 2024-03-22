import React from "react";

interface PropsType {
  title: string;
  data: {
    id: string;
    title: string;
    value: string;
  }[];
}

const HslComponent: React.FC<PropsType> = ({ title, data }) => {
  return (
    <div className="w-full">
      <div className="font-bold text-xl my-2">HSL {title}:</div>
      <div className="w-full flex justify-around items-center relative">
        {data.map((item) => {
          const converted_number = (Number(item.value) / 360) * 100;
          const customStyles = {
            "--value": item.title === "Hue" ? converted_number : item.value,
          } as any; // Type assertion to 'any'
          return (
            <div
              className="flex justify-center items-center flex-col gap-y-2"
              key={item.id}
            >
              <div
                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                style={customStyles}
                role="progressbar"
              >
                {item.title === "Hue" ? item.value + "°" : item.value + "%"}
              </div>
              <div className="font-bold text-center">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HslComponent;

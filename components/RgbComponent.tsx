interface propsType {
  title: string;
  data: {
    id: string;
    title: string;
    value: string;
  }[];
}

const rgbComponent = ({ title, data }: propsType) => {
  return (
    <div className="w-full">
      <div className="font-bold text-xl my-2">RGB {title}:</div>
      <div className="w-full flex justify-around items-center relative flex-col">
        {data.map((item) => {
          const converted_number = (Number(item.value) / 255) * 100;
          const customStyles = {
            "--value": converted_number,
          } as any; // Type assertion to 'any'
          return (
            <div
              className="w-full my-4 flex justify-center items-center"
              key={item.id}
            >
              <div className="font-bold text-right mx-2 w-20">{item.title}</div>
              <progress
                className={`progress w-full ${item.title === "Red" ? "progress-error" : item.title === "Green" ? "progress-success" : "progress-info"} w-4/5 mx-4 `}
                value={item.value}
                max="255"
              ></progress>
              <div className="flex justify-center items-center">
                <div
                  className="radial-progress bg-primary text-primary-content border-4 border-primary"
                  style={customStyles}
                  role="progressbar"
                >
                  {item.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default rgbComponent;
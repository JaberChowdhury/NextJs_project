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
        {data.map((item) => (
          <div
            className="w-full flex justify-center items-center"
            key={item.id}
          >
            <div className="font-bold text-right mx-2 w-20">{item.title}</div>
            <progress
              className={`progress w-full ${item.title === "Red" ? "progress-error" : item.title === "Green" ? "progress-success" : "progress-info"} w-56`}
              value={item.value}
              max="255"
            ></progress>
            <div className="font-bold mx-2 w-20 text-center">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default rgbComponent;

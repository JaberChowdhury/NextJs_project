import utils from "@/lib/utils";

interface propsType {
  params: string;
}

const Tools = ({ params }: propsType) => {
  const utility = new utils(`#${params.color}`);

  return (
    <div>
      <span className="loading loading-dots loading-lg"></span>
      <div>{params.color}</div>
      {JSON.stringify(utility.getColor())}
    </div>
  );
};

export default Tools;

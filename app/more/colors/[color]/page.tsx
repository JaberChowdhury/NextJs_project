import utils from "@/lib/utils";

interface propsType {
  params: {
    color: string;
  };
}

const Tools = ({ params }: propsType) => {
  const utility = new utils(`#${params.color}`);

  return (
    <div>
      <span className="loading loading-dots loading-lg"></span>
      <div>{params.color}</div>
      <div className="p-2">{JSON.stringify(utility.getColor())}</div>
    </div>
  );
};

export default Tools;

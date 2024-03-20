import utils from "@/lib/utils";
import Code from "@/components/Code";

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
      <Code code={JSON.stringify(utility.getColor())} />
    </div>
  );
};

export default Tools;

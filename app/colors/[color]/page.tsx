interface propsType {
  params: {
    color: string;
  };
}

const Color = ({ params }: propsType) => {
  return (
    <div>
      <div>Color</div>
      <div>{JSON.stringify(params)}</div>
    </div>
  );
};

export default Color;

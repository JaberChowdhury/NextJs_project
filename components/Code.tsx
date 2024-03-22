import Gradienttext from "@/components/Gradienttext";

type propsType = {
  code: string;
  hl?: number[];
};

const Hignlighter = ({ code, hl }: propsType) => {
  const array = code.toString().split("\n");

  return (
    <div className="w-full">
      <div className="mockup-code rounded">
        {array.map((line: string, index: number) => {
          if (hl && hl.includes(index + 1)) {
            return (
              <pre className="text-warning" key={index} data-prefix={index + 1}>
                <code>
                  {/*<Gradienttext text={line} />*/}
                  {line}
                </code>
              </pre>
            );
          }
          return (
            <pre key={index} data-prefix={index + 1}>
              <code>{line}</code>
            </pre>
          );
        })}
      </div>
    </div>
  );
};

export default Hignlighter;

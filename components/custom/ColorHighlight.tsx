const Codehighlighter = ({ code }: { code: string }) => {
  const code_array: string[] = code.split("\n");

  return (
    <div>
      {code_array.map((data, id) => (
        <pre key={id} data-prefix={id + 1}>
          <code>{data}</code>
        </pre>
      ))}
    </div>
  );
};

export default Codehighlighter;

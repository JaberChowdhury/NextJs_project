const Codehighlighter = ({ code }: { code: string }) => {
  const code_array: string[] = code.split("\n");

  return (
    <div className="border-2 p-2 rounded-lg bg-gray-800 text-white">
      {code_array.map((data, id) => (
        <pre key={id}>
          <code>
            <span className="text-gray-500">{id + 1}</span> {data}
          </code>
        </pre>
      ))}
    </div>
  );
};

export default Codehighlighter;

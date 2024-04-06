import Code from "@/components/Code";
import fileSystem from "fs";

export async function generateStaticParams() {
  return ["utils"];
}

const getData = async () => {
  const fs = fileSystem.promises;
  const folder = await fs.readdir(__dirname);

  console.log(folder);
  return "";
};

const utils = async () => {
  getData();

  const data = process.env;
  return (
    <div className="w-full flex items-center flex-col">
      <div>utils</div>
      <Code code={JSON.stringify(data, null, 2)} />
    </div>
  );
};

export default utils;

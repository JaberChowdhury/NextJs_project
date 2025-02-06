import useStore from "@/store/syntaxh_store";
import { Language } from "@/types/language";
import { ThemeName } from "@/types/style";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as hljsThemes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as prismThemes from "react-syntax-highlighter/dist/esm/styles/prism";

export interface PropsType {
  codeString: string;
  language: Language;
  style: ThemeName;
}

const Code = ({ codeString, language, style }: PropsType) => {
  // Get the theme dynamically from available themes
  const selectedStyle =
    hljsThemes[style as keyof typeof hljsThemes] ||
    prismThemes[style as keyof typeof prismThemes];
  const { lineNumber,wrapLines } = useStore();
  return (
    <SyntaxHighlighter
      customStyle={{
        borderRadius: "10px",
      }}
      wrapLines={wrapLines}
      showLineNumbers={lineNumber}
      language={language}
      style={selectedStyle}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default Code;

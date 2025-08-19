import { useState } from "react";
import { BioForm } from "./components/BioForm";
import { SpinIcon } from "./components/Icons/SpinIcon";
import { CopyIcon } from "./components/Icons/CopyIcon";

export const App = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    alert("Texto copiado para a área de transferência!");
  };

  return (
    <div className="flex items-start justify-center gap-6 w-full p-4">
      <BioForm setResponse={setResponse} setLoading={setLoading} />
      <br />
      <div className="flex flex-col gap-2 w-full max-w-4xl">
        <div className="flex w-full h-full min-h-80 max-h-80 border-2 border-gray-300 p-5 rounded-md relative ">
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-none px-4 py-2 rounded-md hover:bg-gray-100 hover:cursor-pointer transition-all"
            title="Copy"
          >
            <CopyIcon />
          </button>
          <span
            className="overflow-auto font-mono"
            style={{ scrollbarWidth: "none" }}
          >
            {response}
          </span>
        </div>
        <span>
          Contador de palavras:{" "}
          {response !== "" ? response.split(" ").length : 0}
        </span>
        {/* loading */}
        {loading && (
          <div className="flex items-center justify-center animate-spin">
            <SpinIcon />
          </div>
        )}
      </div>
    </div>
  );
};

import { useState } from "react";
import { BioForm } from "./components/BioForm";
import { SpinIcon } from "./components/Icons/SpinIcon";

export const App = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex items-start justify-center gap-6 w-full p-4">
      <BioForm setResponse={setResponse} setLoading={setLoading} />
      <br />
      <div className="flex flex-col gap-2 w-full max-w-4xl">
        <textarea
          value={response}
          cols={150}
          rows={10}
          disabled={response === "" ? true : false}
          className="resize-none w-full border-2 border-gray-300 p-2 rounded-md"
        />
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

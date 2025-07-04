import { useState } from "react";
import { generateText } from "./api/gemini";

export const App = () => {
  const [response, setResponse] = useState("");

  const handleResponse = async () => {
    setResponse("");
    const props = {
      name: "João Silva",
      tipo: "Engenheiro de Software",
      formacao: "Engenharia da Computação",
    };
    const res = await generateText(props);
    setResponse(res || "");
  };

  return (
    <>
      <button
        onClick={handleResponse}
      >
        Gerar Biografia
      </button>
      <br />
      <textarea
        value={response}
        cols={150}
        rows={10}
        disabled={response === "" ? true : false}
      />
    </>
  );
};

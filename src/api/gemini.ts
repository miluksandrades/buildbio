import { GoogleGenAI } from "@google/genai";
import { environments } from "./enviroments";

export interface PromptProps {
    name?: string;
    sector?: string;
    position?: string;
    tipo?: string;
    formacao?: string;
}

const ai = new GoogleGenAI({ apiKey: environments.api_key });

export async function generateText(props: PromptProps) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents:
            environments.prompt_default +
            props.name +
            " " +
            props.sector +
            " " +
            props.position +
            " " +
            "Com formato " +
            props.tipo +
            " " +
            props.formacao,
    });
    console.log(response.text);
    return response.text;
}

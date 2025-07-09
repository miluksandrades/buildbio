import { useState } from "react";
import { generateText } from "../../api/gemini";

interface Props {
    setResponse: (bio: string) => void;
    setLoading: (loading: boolean) => void;
}

export const BioForm = ({ setResponse, setLoading }: Props) => {
    const [name, setName] = useState("");
    const [sector, setSector] = useState("");
    const [position, setPosition] = useState("");
    const [tipo, setTipo] = useState("");
    const [formacao, setFormacao] = useState("");

    const handleResponse = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await generateText({
                name,
                sector,
                position,
                tipo,
                formacao,
            });
            setResponse(response || "");
        } finally {
            setLoading(false);
        }
    };

    const clearForm = () => {
        setName("");
        setSector("");
        setPosition("");
        setTipo("");
        setFormacao("");
        setResponse("");
    };

    return (
        <form
            onSubmit={handleResponse}
            className="flex flex-col gap-4 w-full max-w-xs min-w-xs"
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">
                        Nome:
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="border h-8"
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">
                        Setor:
                    </label>
                    <input
                        type="text"
                        name="sector"
                        className="border h-8"
                        onChange={(e) => setSector(e.currentTarget.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">
                        Cargo:
                    </label>
                    <input
                        type="text"
                        name="position"
                        className="border h-8"
                        onChange={(e) => setPosition(e.currentTarget.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">
                        Tipo:
                    </label>
                    <select
                        name="tipo"
                        onChange={(e) => setTipo(e.currentTarget.value)}
                        className="border h-8"
                    >
                        <option value="">Selecione um tipo</option>
                        <option value="profissional">Profissional</option>
                        <option value="acadêmico">Acadêmico</option>
                        <option value="descontraido">Descontraído</option>
                        <option value="formal">Formal</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">
                        Formação:
                    </label>
                    <textarea
                        name="formacao"
                        className="border h-24 w-full resize-none"
                        onChange={(e) => setFormacao(e.currentTarget.value)}
                    />
                </div>
            </div>
            <button
                type="submit"
                onClick={handleResponse}
                className="bg-blue-500 text-white py-2 px-4 rounded"
            >
                Gerar Bio
            </button>
            <button
                type="reset"
                onClick={clearForm}
                className="bg-gray-300 text-black py-2 px-4 rounded"
            >
                Limpar
            </button>
        </form>
    );
};

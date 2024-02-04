import { ZodError } from "zod";
import { useClientController } from "../../../app/hooks/useClientController";
import { Client } from "../../../app/entities/Client";

interface CreateClientProps {
    newClient: Client;

    onInputChange: (field: string, value: string) => void;
    onCreateClient: () => Promise<void>;
    validationError: ZodError | null;
}

export function CreateClient({ onCreateClient }: CreateClientProps) {
    const {
        newClient,
        handleInputChange,
        createClient,
        validationError,
    } = useClientController({ onClientCreated: onCreateClient });

    return (
        <>
            <div className="w-2/5">
                {validationError?.errors.map((error, index) => (
                    <p key={index} className="text-red-500 text-sm mb-1">
                        {error.message}
                    </p>
                ))}
                <label className="mb-2">
                    Nome:
                    <input
                        type="text"
                        value={newClient.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="border p-2 w-full"
                    />
                </label>
                <label className="mb-2">
                    Email:
                    <input
                        type="text"
                        value={newClient.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border p-2 w-full"
                    />
                </label>
                <label className="mb-2">
                    Telefone:
                    <input
                        type="text"
                        value={newClient.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border p-2 w-full"
                    />
                </label>
                <label className="mb-2">
                    Cordenada X:
                    <input
                        type="text"
                        value={newClient.coordinate_x}
                        onChange={(e) => handleInputChange('coordinate_x', e.target.value)}
                        className="border p-2 w-full"
                    />
                </label>
                <label className="mb-2">
                    Cordenada Y:
                    <input
                        type="text"
                        value={newClient.coordinate_y}
                        onChange={(e) => handleInputChange('coordinate_y', e.target.value)}
                        className="border p-2 w-full"
                    />
                </label>
                <div className="flex items-center justify-around mt-4">
                    <button onClick={createClient} className="bg-blue-500 text-white p-2 rounded w-1/3">
                        Cadastrar
                    </button>
                    <button onClick={createClient} className="bg-green-500 text-white p-2 rounded w-1/3">
                        Melhor Rota
                    </button>
                </div>
            </div>
        </>
    );
}

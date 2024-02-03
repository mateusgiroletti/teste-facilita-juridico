interface NewClientProps {
    newClient: {
        name: string;
        email: string;
        phone: string;
        coordinate_x: string;
        coordinate_y: string;
    };

    onInputChange: (field: string, value: string) => void;
    onCreateClient: () => void;
}

export function CreateClient({ newClient, onInputChange, onCreateClient }: NewClientProps) {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="w-full max-w-md">
                <label className="mb-2">
                    Nome:
                    <input
                        type="text"
                        value={newClient.name}
                        onChange={(e) => onInputChange('name', e.target.value)}
                        className="border p-2 w-full"
                    />
                </label>
                <label className="mb-2">
                    Email:
                    <input
                        type="text"
                        value={newClient.email}
                        onChange={(e) => onInputChange('email', e.target.value)}
                        className="border p-2 w-full"
                    />
                </label>
                <label className="mb-2">
                    Telefone:
                    <input
                        type="text"
                        value={newClient.phone}
                        onChange={(e) => onInputChange('phone', e.target.value)}
                        className="border p-2 w-full"
                    />
                </label>
                <label className="mb-2">
                    Cordenada X:
                    <input
                        type="text"
                        value={newClient.coordinate_x}
                        onChange={(e) => onInputChange('coordinate_x', e.target.value)}
                        className="border p-2 w-full"
                    />
                </label>
                <label className="mb-2">
                    Cordenada Y:
                    <input
                        type="text"
                        value={newClient.coordinate_y}
                        onChange={(e) => onInputChange('coordinate_y', e.target.value)}
                        className="border p-2 w-full"
                    />
                </label>

                <div className="flex items-center justify-between mt-4">
                    <button onClick={onCreateClient} className="bg-blue-500 text-white p-2 rounded w-1/2">
                        Cadastrar
                    </button>

                    <button className="bg-green-500 text-white p-2 rounded w-1/2">
                        Visualizar Melhor Rota
                    </button>
                </div>
            </div>
        </div>
    );
}

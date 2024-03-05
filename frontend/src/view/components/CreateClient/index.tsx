import { useNewClient } from './useNewClient';

interface CreateClientprops {
    onFindBestRoute: () => {};
}

export function CreateClient({onFindBestRoute}: CreateClientprops) {
    const {
        validationError,
        handleSubmitCreateClient,
        name,
        handleNameChange,
        email,
        handleEmailChange,
        phone,
        handlePhoneChange,
        coordinateX,
        handleCoordinateXChange,
        coordinateY,
        handleCoordinateYChange
    } = useNewClient();

    return (
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
                    value={name}
                    onChange={handleNameChange}
                    className="border p-2 w-full"
                />
            </label>
            <label className="mb-2">
                Email:
                <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    className="border p-2 w-full"
                />
            </label>
            <label className="mb-2">
                Telefone:
                <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="border p-2 w-full"
                />
            </label>
            <label className="mb-2">
                Coordenada X:
                <input
                    type="text"
                    value={coordinateX}
                    onChange={handleCoordinateXChange}
                    className="border p-2 w-full"
                />
            </label>
            <label className="mb-2">
                Coordenada Y:
                <input
                    type="text"
                    value={coordinateY}
                    onChange={handleCoordinateYChange}
                    className="border p-2 w-full"
                />
            </label>
            <div className="flex items-center justify-around mt-4">
                <button onClick={handleSubmitCreateClient} className="bg-blue-500 text-white p-2 rounded w-1/3">
                    Cadastrar
                </button>
                <button onClick={onFindBestRoute} className="bg-green-500 text-white p-2 rounded w-1/3">
                    Melhor Rota
                </button>
            </div>
        </div>
    );
}

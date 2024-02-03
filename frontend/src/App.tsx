import { useEffect } from "react";
import { CreateClient } from "./view/components/CreateClient";
import { useCreateClientController } from "./view/components/CreateClient/useCreateClientController";
import { ListClients } from "./view/components/ListClients";

function App() {
    const {
        newClient,
        handleInputChange,
        createClient,
        clients,
        loadClients,
        validationError,
    } = useCreateClientController({
        onClientCreated: () => {
            loadClients();
        },
    });

    useEffect(() => {
        loadClients();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center h-full container p-4 bg-white rounded shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Gerenciamento de Clientes</h1>

                <ListClients clients={clients} />

                <CreateClient
                    newClient={newClient}
                    onInputChange={handleInputChange}
                    onCreateClient={createClient}
                    validationError={validationError}
                />
            </div>
        </div>
    );
}

export default App;
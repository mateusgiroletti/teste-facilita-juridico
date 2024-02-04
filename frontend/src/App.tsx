import { useEffect } from "react";
import { CreateClient } from "./view/components/CreateClient";
import { useClientController } from "./app/hooks/useClientController";
import { ListClients } from "./view/components/ListClients";

function App() {
    const {
        newClient,
        handleInputChange,
        createClient,
        clients,
        loadClients,
        validationError,
    } = useClientController({
        onClientCreated: () => {
            loadClients();
        },
    });

    useEffect(() => {
        loadClients();
    }, [loadClients]);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center container p-4 bg-white rounded shadow-lg">
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
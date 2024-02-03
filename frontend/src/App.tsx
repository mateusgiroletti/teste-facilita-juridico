import { useEffect } from 'react';

import { ListClients } from './view/components/ListClients';
import { useCreateClientController } from './view/components/CreateClient/useCreateClientController';
import { CreateClient } from './view/components/CreateClient';

function App() {
    const { newClient, handleInputChange, createClient, clients, loadClients } = useCreateClientController();

    useEffect(() => {
        loadClients();
    }, []);

    return (
        <div className="">
            <div className="container mx-auto p-4 bg-white rounded shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Gerenciamento de Clientes</h1>

                <ListClients clients={clients} />
                
                <CreateClient
                    newClient={newClient}
                    onInputChange={handleInputChange}
                    onCreateClient={createClient}
                />
            </div>
        </div>
    );
}

export default App;

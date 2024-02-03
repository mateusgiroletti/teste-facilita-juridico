import { useState, useEffect } from 'react';
import axios from 'axios';
import { ListClients } from './view/components/ListClients';
import { NewClient } from './view/components/NewClient';
import { Client } from './app/interfaces/client';

function App() {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        loadClients();
    }, []);

    const loadClients = async () => {
        try {
            const response = await axios.get('http://localhost:3000/clients');
            setClients(response.data?.clients);
        } catch (error) {
            console.error('Erro ao carregar clients:', error);
        }
    };

    const createClient = async (newClient: Client) => {
        try {
            await axios.post('http://localhost:3000/clients', newClient);
            loadClients();
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
        }
    };

    return (
        <div className="">
            <div className="container mx-auto p-4 bg-white rounded shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Gerenciamento de Clientes</h1>

                <ListClients clients={clients} />
                <NewClient onCreateClient={createClient} />
            </div>
        </div>
    );
}

export default App;

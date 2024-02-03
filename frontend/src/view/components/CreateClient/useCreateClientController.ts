import { useState } from 'react';
import axios from 'axios';
import { Client } from '../../../app/interfaces/client';

export function useCreateClientController() {
    const [newClient, setNewClient] = useState({
        name: '',
        email: '',
        phone: '',
        coordinate_x: '',
        coordinate_y: '',
    });
    
    const [clients, setClients] = useState<Client[]>([]);

    const handleInputChange = (field: string, value: string) => {
        setNewClient({ ...newClient, [field]: value });
    };

    const createClient = async () => {
        try {
            await axios.post('http://localhost:3000/clients', newClient);
            loadClients();
            setNewClient({
                name: '',
                email: '',
                phone: '',
                coordinate_x: '',
                coordinate_y: '',
            });
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
        }
    };

    const loadClients = async () => {
        try {
            const response = await axios.get('http://localhost:3000/clients');
            setClients(response.data?.clients);
        } catch (error) {
            console.error('Erro ao carregar clients:', error);
        }
    };

    return {
        newClient,
        handleInputChange,
        createClient,
        clients,
        loadClients
    };
}

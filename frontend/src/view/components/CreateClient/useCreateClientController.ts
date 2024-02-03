import { useState } from 'react';
import axios from 'axios';
import { Client } from '../../../app/interfaces/client';
import { z, ZodError } from 'zod';

const clientSchema = z.object({
    name: z.string().min(1, 'O campo Nome é obrigatório').max(255, 'Limite de 255 caracteres execido'),
    email: z.string().email('O campo Email é inválido').max(150, 'Limite de 150 caracteres execido'),
    phone: z.string().min(1, 'O telefone é obrigatório').max(20, 'Limite de 20 caracteres execido'),
    coordinate_x: z.string().min(1, 'A coordenada X é obrigatória').max(11, 'Limite de 11 caracteres execido'),
    coordinate_y: z.string().min(1, 'A coordenada Y é obrigatória').max(11, 'Limite de 11 caracteres execido'),
});

interface UseCreateClientControllerProps {
    onClientCreated: () => void;
}

export function useCreateClientController({ onClientCreated }: UseCreateClientControllerProps) {
    const [newClient, setNewClient] = useState({
        name: '',
        email: '',
        phone: '',
        coordinate_x: '',
        coordinate_y: '',
    });

    const [clients, setClients] = useState<Client[]>([]);
    const [validationError, setValidationError] = useState<ZodError | null>(null);

    const handleInputChange = (field: string, value: string) => {
        setNewClient({ ...newClient, [field]: value });
    };

    const createClient = async () => {
        try {
            const validatedClient = clientSchema.parse(newClient);
            await axios.post('http://localhost:3000/clients', validatedClient);
            setValidationError(null);
            onClientCreated();
            setNewClient({
                name: '',
                email: '',
                phone: '',
                coordinate_x: '',
                coordinate_y: '',
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                setValidationError(error);
            } else {
                console.error('Erro ao cadastrar cliente:', error);
            }
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
        loadClients,
        validationError,
    };
}
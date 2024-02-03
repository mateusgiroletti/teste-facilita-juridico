import { useState } from 'react';
import { Client } from '../../../app/interfaces/client';

interface NewClientProps {
    onCreateClient: (newClient: Client) => void;
}

export function NewClient({ onCreateClient }: NewClientProps) {
    const [newClient, setNewClient] = useState({
        name: '',
        email: '',
        phone: '',
        coordinate_x: '',
        coordinate_y: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setNewClient({ ...newClient, [field]: e.target.value });
    };

    const handleCreateClient = () => {
        onCreateClient(newClient);
        setNewClient({
            name: '',
            email: '',
            phone: '',
            coordinate_x: '',
            coordinate_y: ''
        });
    };

    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2">
                Nome:
                <input
                    type="text"
                    value={newClient.name}
                    onChange={(e) => handleInputChange(e, 'name')}
                    className="border p-2"
                />
            </label>
            <label className="mb-2">
                Email:
                <input
                    type="text"
                    value={newClient.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                    className="border p-2"
                />
            </label>
            <label className="mb-2">
                Telefone:
                <input
                    type="text"
                    value={newClient.phone}
                    onChange={(e) => handleInputChange(e, 'phone')}
                    className="border p-2"
                />
            </label>
            <label className="mb-2">
                Cordenada X:
                <input
                    type="text"
                    value={newClient.coordinate_x}
                    onChange={(e) => handleInputChange(e, 'coordinate_x')}
                    className="border p-2"
                />
            </label>
            <label className="mb-2">
                Cordenada Y:
                <input
                    type="text"
                    value={newClient.coordinate_y}
                    onChange={(e) => handleInputChange(e, 'coordinate_y')}
                    className="border p-2"
                />
            </label>
            <button onClick={handleCreateClient} className="bg-blue-500 text-white p-2 rounded">
                Cadastrar
            </button>
        </div>
    );
}

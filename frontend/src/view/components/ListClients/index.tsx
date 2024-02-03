import { Client } from "../../../app/interfaces/client";

interface ListClientsProps {
    clients: Client[];
}

export function ListClients({ clients }: ListClientsProps) {
    return (
        <div className="mb-8 w-2/5">
            <h2 className="text-2xl font-bold mb-4">Lista de Clientes</h2>
            <ul className="divide-y divide-gray-300">
                {clients.map((client: Client) => (
                    <li key={client.id} className="py-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-semibold">{client.name}</p>
                                <p className="text-sm text-gray-600">{client.email}</p>
                                <p className="text-sm text-gray-600">Telefone: {client.phone}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Coordenada X: {client.coordinate_x}</p>
                                <p className="text-sm text-gray-600">Coordenada Y: {client.coordinate_y}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

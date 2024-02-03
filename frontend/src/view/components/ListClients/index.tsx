import { Client } from "../../../app/interfaces/client";

interface ListClientsProps {
    clients: Client[];
}

export function ListClients({ clients }: ListClientsProps) {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Lista de Clientes</h2>
            <ul>
                {clients.map((client: Client) => (
                    <li key={client.id} className="mb-2">
                        {client.name} - {client.email} - {client.phone}  - {client.coordinate_x}  - {client.coordinate_y}
                    </li>
                ))}
            </ul>
        </div>
    )
}
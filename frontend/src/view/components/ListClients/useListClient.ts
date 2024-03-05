import { useCallback, useEffect, useState } from "react";
import { clientService } from "../../../app/services/clients";
import { Client } from "../../../app/entities/Client";

export function useListClient() {
    const [clients, setClients] = useState<Client[]>([]);

    const loadClients = useCallback(async () => {
        try {
            const { clients } = await clientService.getAll();
            setClients(clients);
        } catch (error) {
            console.error('Erro ao carregar clients:', error);
        }
    }, []);

    useEffect(() => {
        loadClients();
    }, [loadClients]);

    return {
        loadClients,
        clients
    };
}
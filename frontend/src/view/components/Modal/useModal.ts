import { useState } from "react";
import { clientService } from "../../../app/services/clients";
import { Client } from "../../../app/entities/Client";

export function useModal() {

    const [clientsSortedByBestRoute, setClientsSortedByBestRoute] = useState<Client[]>([]);
    const [showModal, setShowModal] = useState(false);

    async function handleFindBestRoute() {
        try {
            const { clients } = await clientService.bestRoute();
            setClientsSortedByBestRoute(clients);
            setShowModal(true);
        } catch (error) {
            console.error('Erro ao carregar best route:', error);
        }
    }

    return {
        handleFindBestRoute,
        showModal,
        clientsSortedByBestRoute,
        setShowModal
    }
}
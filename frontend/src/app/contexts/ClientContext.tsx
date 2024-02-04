import { createContext, useContext, useEffect } from 'react';
import { useClientController } from '../hooks/useClientController';
import { Client } from '../entities/Client';
import { ZodError } from 'zod';

interface ClientContextValue {
    newClient: Client;
    handleInputChange: (field: string, value: string) => void;
    createClient: () => Promise<void>;
    clients: Client[];
    validationError: ZodError | null;
    findBestRoute: () => void;
    showModal: boolean;
    clientsSortedByBestRoute: Client[];
    setShowModal: (show: boolean) => void;
}

const ClientContext = createContext({} as ClientContextValue);

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
    const {
        newClient,
        handleInputChange,
        createClient,
        clients,
        loadClients,
        validationError,
        findBestRoute,
        showModal,
        clientsSortedByBestRoute,
        setShowModal
    } = useClientController({
        onClientCreated: () => {
            loadClients();
        },
    });

    useEffect(() => {
        loadClients();
    }, []);

    return (
        <ClientContext.Provider
            value={{
                newClient,
                handleInputChange,
                createClient,
                clients,
                validationError,
                findBestRoute,
                showModal,
                clientsSortedByBestRoute,
                setShowModal
            }}
        >
            {children}
        </ClientContext.Provider>
    );
};

export const useClientContext = () => {
    return useContext(ClientContext);
};

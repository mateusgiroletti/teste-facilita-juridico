import { useClientContext } from "./app/contexts/ClientContext";
import { CreateClient } from "./view/components/CreateClient";
import { ListClients } from "./view/components/ListClients";
import { Modal } from "./view/components/Modal";

function App() {
    const { showModal } = useClientContext();

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center container p-4 bg-white rounded shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Gerenciamento de Clientes</h1>
                <ListClients />
                <CreateClient />
            </div>

            {showModal && <Modal />}
        </div>
    );
}

export default App;
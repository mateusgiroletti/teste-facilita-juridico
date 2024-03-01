import { CreateClient } from "./view/components/CreateClient";
import { ListClients } from "./view/components/ListClients";
import { Modal } from "./view/components/Modal";

function App() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center container p-4 bg-white rounded shadow-lg min-h-screen">
                <h1 className="text-3xl font-bold mb-4">Gerenciamento de Clientes</h1>
                <CreateClient />
                <ListClients />
            </div>

            {/* <Modal /> */}
        </div>
    );
}

export default App;
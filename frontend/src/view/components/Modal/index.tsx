import { useClientContext } from "../../../app/contexts/ClientContext";
import { ModalPortal } from "./ModalPortal";

export function Modal() {
    const { clientsSortedByBestRoute, setShowModal } = useClientContext();

    return (
        <ModalPortal>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="modal bg-white p-8 rounded-lg w-1/2 flex flex-col justify-center items-center">
                    <div className="modal-content ">
                        <h2 className="text-2xl font-bold mb-4">Melhor Rota</h2>
                        <ul className="list-disc pl-4">
                            {clientsSortedByBestRoute.map((client) => (
                                <li key={client.id} className="mb-2">
                                    {client.name} - X: {client.coordinate_x}, Y: {client.coordinate_y}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        onClick={() => setShowModal(false)}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </ModalPortal>
    );
}

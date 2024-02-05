import { IndexClientDTO } from "../../database/dto/IndexClientDTO";
import { ClientRepository } from "../../database/repositories/ClientRepository";
import { IRequest } from "../Interfaces/IController";
import { FindNearestNeighborUseCase } from "./FindNearestNeighborUseCase";

interface IOutput {
    clients?: IndexClientDTO[];
}

export class FindBestRouteUseCase {
    constructor(
        private readonly clientRepo: ClientRepository,
        private readonly findNearestNeighbor: FindNearestNeighborUseCase
    ) { }

    async execute(request: IRequest): Promise<IOutput> {
        const clients = await this.clientRepo.findAll(request);

        try {
            const bestRoute = [];
            let currentPoint = { coordinate_x: 0, coordinate_y: 0 };

            // Ira executar equanto houver clientes para visitar
            while (clients.length !== 0) {
                // Encontra o vizinho mais próximo em relação ao ponto atual
                const nearestNeighbor = this.findNearestNeighbor.execute(
                    currentPoint,
                    clients
                );

                // Adiciona o cliente mais próximo a melhor rota
                bestRoute.push(clients[nearestNeighbor]);

                // Atualiza o ponto atual para o cliente mais próximo
                currentPoint = clients[nearestNeighbor];

                // Remove o cliente visitado da lista de clientes
                clients.splice(clients.findIndex((_, index) => index === nearestNeighbor), 1);
            }

            return { clients: bestRoute };

        } catch (error) {
            throw error("FindBestRouteUseCase", error);
        }
    }
}

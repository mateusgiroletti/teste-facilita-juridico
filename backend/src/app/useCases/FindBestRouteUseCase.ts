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

        const locations = clients.map(client => ({
            x: client.coordinate_x,
            y: client.coordinate_y,
        }));

        const clientsLength = locations.length;
        const visited: boolean[] = Array(clientsLength).fill(false);
        const path: number[] = [];

        // Começando do ponto (0,0)
        let current = 0;
        visited[current] = true;
        path.push(current);

        // Encontrando o caminho mais curto usando o algoritmo de vizinho mais próximo
        for (let i = 1; i < clientsLength; i++) {
            const nearestNeighbor = this.findNearestNeighbor.execute(current, locations, visited);
            visited[nearestNeighbor] = true;
            path.push(nearestNeighbor);
            current = nearestNeighbor;
        }

        // Reorganiza a lista de clientes com base na rota encontrada
        const bestRoute = path.map(index => clients[index]);

        return { clients: bestRoute };
    }
}
// FindBestRouteUseCase.spec.ts
import { ClientRepository } from "../../database/repositories/ClientRepository";
import { IRequest } from "../Interfaces/IController";
import { FindBestRouteUseCase } from "./FindBestRouteUseCase";
import { FindNearestNeighborUseCase } from "./FindNearestNeighborUseCase";

interface Client {
    coordinate_x: number;
    coordinate_y: number;
}

interface MockClientRepository {
    findAll: jest.Mock<Promise<Client[]>>;
}


describe("FindBestRouteUseCase", () => {
    it("deve encontrar a melhor rota corretamente", async () => {
        const mockClientRepo: MockClientRepository = {
            findAll: jest.fn().mockResolvedValue([
                { coordinate_x: 1, coordinate_y: 1 },
                { coordinate_x: 0, coordinate_y: 0 },
                { coordinate_x: 3, coordinate_y: 4 },
            ]),
        } as MockClientRepository;

        const mockCalculateDistanceUseCase: any = {
            execute: jest.fn(() => 1),
        };

        const findNearestNeighborUseCase = new FindNearestNeighborUseCase(mockCalculateDistanceUseCase);
        const findBestRouteUseCase = new FindBestRouteUseCase(mockClientRepo as unknown as ClientRepository, findNearestNeighborUseCase);

        const validRequest: IRequest = {
            body: {},
            params: {},
        };

        const result = await findBestRouteUseCase.execute(validRequest);

        // Verifica se todos os elementos esperados estão presentes no array, independentemente da ordem
        expect(result.clients).toContainEqual({ coordinate_x: 0, coordinate_y: 0 });
        expect(result.clients).toContainEqual({ coordinate_x: 1, coordinate_y: 1 });
        expect(result.clients).toContainEqual({ coordinate_x: 3, coordinate_y: 4 });
    });
});

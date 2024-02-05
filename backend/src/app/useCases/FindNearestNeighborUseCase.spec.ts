// Importa a classe e suas dependências
import { FindNearestNeighborUseCase } from "./FindNearestNeighborUseCase";
import { CalculateDistanceUseCase } from "./CalculateDistanceUseCase";
import { IndexClientDTO } from "../../database/dto/IndexClientDTO";

describe("FindNearestNeighborUseCase", () => {

    test("should find the nearest neighbor index", () => {
        const point = { coordinate_x: 0, coordinate_y: 0 };
        const availablePoints: IndexClientDTO[] = [
            {
                id: "1",
                name: "client1",
                email: "email1@email.com",
                phone: 55,
                coordinate_x: 1,
                coordinate_y: 1
            },
            {
                id: "2",
                name: "client2",
                email: "email2@email.com",
                phone: 55,
                coordinate_x: 2,
                coordinate_y: 2
            },
            {
                id: "3",
                name: "client3",
                email: "email3@email.com",
                phone: 55,
                coordinate_x: 3,
                coordinate_y: 3
            },
        ];

        const calculateDistanceUseCase = new CalculateDistanceUseCase();
        const findNearestNeighborUseCase = new FindNearestNeighborUseCase(calculateDistanceUseCase);

        const result = findNearestNeighborUseCase.execute(point, availablePoints);

        expect(result).toBe(0);
    });
});

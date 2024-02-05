import { IndexClientDTO } from "../../database/dto/IndexClientDTO";
import { CalculateDistanceUseCase } from "./CalculateDistanceUseCase";

export class FindNearestNeighborUseCase {
    constructor(
        private readonly calculateDistanceUseCase: CalculateDistanceUseCase,
    ) { }

    execute(
        point: { coordinate_x: number; coordinate_y: number },
        availablePoints: IndexClientDTO[]
    ): number {
        let minimumDistance = Infinity;
        let nearestNeighborIndex = -1;

        /* 
           Usa CalculateDistanceUseCase para calcular a distância 
           entre o ponto atual e cada outro ponto não visitado,
           para encontrar o vizinho mais próximo e retonar a posição deste elemento.
       */

        for (let i = 0; i < availablePoints.length; i++) {
            const distance = this.calculateDistanceUseCase.execute(point, availablePoints[i]);

            if (distance < minimumDistance) {
                minimumDistance = distance;
                nearestNeighborIndex = i;
            }
        }

        return nearestNeighborIndex;
    }
}

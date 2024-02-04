import { CalculateDistanceUseCase } from "./CalculateDistanceUseCase";

export class FindNearestNeighborUseCase {
    constructor(
        private readonly calculateDistanceUseCase: CalculateDistanceUseCase,
    ) { }

    execute(current: number, locations: { x: number; y: number }[], visited: boolean[]): number {
        let minDistance = Infinity;
        let nearestNeighbor = -1;

        /* 
            Usa CalculateDistanceUseCase para calcular a distância 
            entre o ponto atual e cada outro ponto não visitado,
            para encontrar o vizinho mais próximo e retonar a posição deste elemento.
        */
       
        for (let i = 0; i < locations.length; i++) {
            if (!visited[i] && i !== current) {
                const d = this.calculateDistanceUseCase.execute(locations[current], locations[i]);
                if (d < minDistance) {
                    minDistance = d;
                    nearestNeighbor = i;
                }
            }
        }

        return nearestNeighbor;
    }
} 
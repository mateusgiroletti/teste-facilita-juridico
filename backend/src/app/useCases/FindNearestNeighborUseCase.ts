import { CalculateDistanceUseCase } from "./CalculateDistanceUseCase";

export class FindNearestNeighborUseCase {
    constructor(
        private readonly calculateDistanceUseCase: CalculateDistanceUseCase,
    ) { }
    
    execute(current: number, locations: { x: number; y: number }[], visited: boolean[]): number {
        let minDistance = Infinity;
        let nearestNeighbor = -1;

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
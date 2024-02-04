import { FindNearestNeighborUseCase } from "../useCases/FindNearestNeighborUseCase";
import { makeCalculateDistanceUseCase } from "./makeCalculateDistanceUseCase";

export function makeFindNearestNeighborUseCase() {
    const calculateDistance = makeCalculateDistanceUseCase();

    return new FindNearestNeighborUseCase(calculateDistance);
}
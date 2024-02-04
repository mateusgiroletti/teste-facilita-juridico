import { CalculateDistanceUseCase } from "../useCases/CalculateDistanceUseCase";

export function makeCalculateDistanceUseCase() {
    return new CalculateDistanceUseCase();
}
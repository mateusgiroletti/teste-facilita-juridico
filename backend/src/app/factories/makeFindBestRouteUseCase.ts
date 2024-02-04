import { FindBestRouteUseCase } from "../useCases/FindBestRouteUseCase";
import { makeClientRepository } from "./makeCreateClientRepository";
import { makeFindNearestNeighborUseCase } from "./makeFindNearestNeighborUseCase";

export function makeFindBestRouteUseCase() {
    const clientRepo = makeClientRepository();
    const findNearestNeighborUseCase = makeFindNearestNeighborUseCase();

    return new FindBestRouteUseCase(clientRepo, findNearestNeighborUseCase);
}
import { FindBestRouteController } from "../controllers/FindBestRouteController";
import { makeFindBestRouteUseCase } from "./makeFindBestRouteUseCase";

export function makeFindBestRouteController() {
    const findBestRouteUseCase = makeFindBestRouteUseCase();
    return new FindBestRouteController(findBestRouteUseCase);
}
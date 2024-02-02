import { ListClientController } from "../controllers/ListClientController";

import { makeListClientUseCase } from "./makeListClientUseCase";

export function makeListClientController() {
    const listClientUseCase = makeListClientUseCase();
    return new ListClientController(listClientUseCase);
}
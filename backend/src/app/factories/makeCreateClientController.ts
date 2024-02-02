import { CreateClientController } from "../controllers/CreateClientController";
import { makeCreateClientUseCase } from "./makeCreateClientUseCase";

export function makeCreateClientController() {
    const createClientUseCase = makeCreateClientUseCase();
    return new CreateClientController(createClientUseCase);
}
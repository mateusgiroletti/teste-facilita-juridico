import { CreateClientController } from "../controllers/CreateClientController";
import { makeCreateClientUseCase } from "./makeCreateClientUseCase";

export function makeCreateClientController() {
    return new CreateClientController(makeCreateClientUseCase());
}
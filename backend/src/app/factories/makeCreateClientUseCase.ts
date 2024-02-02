import { CreateClientUseCase } from "../useCases/CreateClientUseCase";
import { makeClientRepository } from "./makeCreateClientRepository";

export function makeCreateClientUseCase() {
    const clientRepo = makeClientRepository();

    return new CreateClientUseCase(clientRepo);
}
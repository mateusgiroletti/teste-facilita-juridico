import { CreateClientUseCase } from "../useCases/CreateClientUseCase";
import { makeClientRepository } from "./makeCreateClientRepository";

export function makeCreateClientUseCase() {
    return new CreateClientUseCase(makeClientRepository());
}
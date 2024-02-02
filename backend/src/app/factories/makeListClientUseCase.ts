import { ListClientUseCase } from "../useCases/ListClientUseCase";
import { makeClientRepository } from "./makeCreateClientRepository";

export function makeListClientUseCase() {
    const clientRepo = makeClientRepository();

    return new ListClientUseCase(clientRepo);
}
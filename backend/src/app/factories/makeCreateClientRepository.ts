import { ClientRepository } from "../repositories/ClientRepository";
import { makePostgreeClient } from "./makePostgreeClient";

export function makeClientRepository() {
    return new ClientRepository(makePostgreeClient());
}
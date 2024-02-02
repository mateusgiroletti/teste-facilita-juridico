import { ClientRepository } from "../../database/repositories/ClientRepository";
import { makePostgreeClient } from "./makePostgreeClient";

export function makeClientRepository() {
    const postgreeClient = makePostgreeClient();
    return new ClientRepository(postgreeClient);
}
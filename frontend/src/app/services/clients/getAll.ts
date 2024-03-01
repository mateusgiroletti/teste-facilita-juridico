import { Client } from "../../entities/Client";
import { httpClient } from "../httpClient";

export interface ClientResponse {
    clients: Client[];
};

export async function getAll() {
    const { data } = await httpClient.get<ClientResponse>("/clients");

    return data;
}

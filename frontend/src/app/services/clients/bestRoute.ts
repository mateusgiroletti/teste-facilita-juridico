import { Client } from "../../entities/Client";
import { httpClient } from "../httpClient";

interface ClientResponse {
    clients: Client[];
};

export async function bestRoute() {
    const { data } = await httpClient.get<ClientResponse>("/clients/find-best-route");

    return data;
}

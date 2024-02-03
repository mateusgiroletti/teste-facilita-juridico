import { Client } from "../../entities/Client";
import { httpClient } from "../httpClient";

type ClientResponse = Array<Client>;

export async function getAll() {
    const { data } = await httpClient.get<ClientResponse>("/clients");

    return data;
}

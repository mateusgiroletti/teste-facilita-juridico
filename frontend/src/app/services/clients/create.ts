import { httpClient } from "../httpClient";

export interface CreateClientParams {
    name: string;
    email: string;
    phone: string;
    coordinate_x: string;
    coordinate_y: string;
}

export async function create(params: CreateClientParams) {
    const { data } = await httpClient.post("/clients", params);

    return data;
}

import PostgreeClient from "../../database/PostgreeClient";
import { CreateClientDTO } from "../../database/dto/CreateClientDTO";
import { IndexClientDTO } from "../../database/dto/IndexClientDTO";

export class ClientRepository {
    constructor(private readonly postgreeClient: PostgreeClient) { }

    async findAll(): Promise<IndexClientDTO[]> {
        const query = "SELECT * FROM clients";
        const result = await this.postgreeClient.query(query);
        return result.rows;
    }

    async create(client: CreateClientDTO): Promise<number> {
        const query = `
            INSERT INTO clients (name, mail, phone, coordinate_x, coordinate_y)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id
        `;

        const result = await this.postgreeClient.query(query, [client]);
        return result.rows[0].id;
    }
}

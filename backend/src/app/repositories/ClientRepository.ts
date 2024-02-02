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

    async create({ name, email, phone, coordinate_x, coordinate_y }: CreateClientDTO): Promise<number> {
        try {
            const query = `
            INSERT INTO clients (name, email, phone, coordinate_x, coordinate_y)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id
        `;

            const result = await this.postgreeClient.query(query, [name, email, phone, coordinate_x, coordinate_y]);
            return result.rows[0].id;
        } catch (error) {
            console.log(error);
            throw new error;
        }
    }
}

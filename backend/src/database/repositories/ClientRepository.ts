import { IRequest } from "../../app/Interfaces/IController";
import PostgreeClient from "../../database/PostgreeClient";
import { CreateClientDTO } from "../../database/dto/CreateClientDTO";
import { IndexClientDTO } from "../../database/dto/IndexClientDTO";

export class ClientRepository {
    constructor(private readonly postgreeClient: PostgreeClient) { }

    async findAll({ query }: IRequest): Promise<IndexClientDTO[]> {
        let queryRow = "SELECT * FROM clients WHERE 1=1";

        const values: any[] = [];

        if (query?.name !== undefined) {
            queryRow += " AND name = $1";
            values.push(query.name);
        }

        if (query?.email !== undefined) {
            queryRow += ` AND email = $${values.length + 1}`;
            values.push(query.email);
        }

        if (query?.phone !== undefined) {
            queryRow += ` AND phone = $${values.length + 1} `;
            values.push(query.phone);
        }

        const result = await this.postgreeClient.query(queryRow, values);
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

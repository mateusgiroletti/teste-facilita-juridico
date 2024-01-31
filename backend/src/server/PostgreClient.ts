import { Pool, QueryResult } from "pg";

class PostgreClient {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: 5433,
        });
    }

    async query(queryText: string, values?: any[]): Promise<QueryResult> {
        const client = await this.pool.connect();
        try {
            const result = await client.query(queryText, values);
            return result;
        } finally {
            client.release();
        }
    }

    async end(): Promise<void> {
        await this.pool.end();
    }
}

export default PostgreClient;
import { IndexClientDTO } from "../../database/dto/IndexClientDTO";
import { ClientRepository } from "../../database/repositories/ClientRepository";

interface IOutput {
    client: IndexClientDTO[];
}

export class ListClientUseCase {
    constructor(private readonly clientRepo: ClientRepository) { }

    async execute(/* indexClientDTO: IndexClientDTO */): Promise<IOutput> {
        const client = await this.clientRepo.findAll();

        return { client };
    }
}
import { CreateClientDTO } from "../../database/dto/CreateClientDTO";
import { ClientRepository } from "../../database/repositories/ClientRepository";

interface IOutput {
    id: number;
}

export class CreateClientUseCase {
    constructor(private readonly clientRepo: ClientRepository) { }

    async execute(createClientDto: CreateClientDTO): Promise<IOutput> {
        const clientId = await this.clientRepo.create(createClientDto);

        return {
            id: clientId,
        };
    }
}
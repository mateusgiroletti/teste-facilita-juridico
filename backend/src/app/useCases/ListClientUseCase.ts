import { IndexClientDTO } from "../../database/dto/IndexClientDTO";
import { ClientRepository } from "../../database/repositories/ClientRepository";
import { IRequest } from "../Interfaces/IController";

interface IOutput {
    clients?: IndexClientDTO[];
}

export class ListClientUseCase {
    constructor(private readonly clientRepo: ClientRepository) { }

    async execute(request: IRequest): Promise<IOutput> {
        const clients = await this.clientRepo.findAll(request);

        return { clients };
    }
}
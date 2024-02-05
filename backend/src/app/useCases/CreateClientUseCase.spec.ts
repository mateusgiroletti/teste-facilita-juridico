import { CreateClientUseCase } from "./CreateClientUseCase";
import { ClientRepository } from "../../database/repositories/ClientRepository";
import { CreateClientDTO } from "../../database/dto/CreateClientDTO";
import PostgreeClient from "../../database/PostgreeClient";

jest.mock("../../database/repositories/ClientRepository");

describe("CreateClientUseCase", () => {
    let createClientUseCase: CreateClientUseCase;
    let mockClientRepository: jest.Mocked<ClientRepository>;

    beforeEach(() => {
        jest.clearAllMocks();
        const mockPostgreeClient = {} as PostgreeClient;

        mockClientRepository = new ClientRepository(mockPostgreeClient) as jest.Mocked<ClientRepository>;
        createClientUseCase = new CreateClientUseCase(mockClientRepository);
    });

    it("should be create a new client and return the ID", async () => {
        const mockCreateClientDto: CreateClientDTO = {
            name: "client",
            email: "email@email.com",
            phone: 666666,
            coordinate_x: 36,
            coordinate_y: 50
        };

        const mockClientId = 1;
        mockClientRepository.create.mockResolvedValue(mockClientId);

        const result = await createClientUseCase.execute(mockCreateClientDto);

        expect(mockClientRepository.create).toHaveBeenCalledWith(mockCreateClientDto);
        expect(result.id).toBe(mockClientId);
    });
});

import { CreateClientUseCase } from "./CreateClientUseCase";
import { ClientRepository } from "../../database/repositories/ClientRepository";
import { CreateClientDTO } from "../../database/dto/CreateClientDTO";
import PostgreeClient from "../../database/PostgreeClient";

jest.mock("../../database/repositories/ClientRepository");

describe("CreateClientUseCase", () => {
    let createClientUseCase: CreateClientUseCase;
    let mockClientRepository: jest.Mocked<ClientRepository>;

    beforeEach(() => {
        // Limpa o mock entre os testes
        jest.clearAllMocks();
        const mockPostgreeClient = {} as PostgreeClient;

        mockClientRepository = new ClientRepository(mockPostgreeClient) as jest.Mocked<ClientRepository>;
        createClientUseCase = new CreateClientUseCase(mockClientRepository);
    });

    it("should be create a new client and return the ID", async () => {
        // Configuração do mock para simular a criação bem-sucedida de um cliente
        const mockCreateClientDto: CreateClientDTO = {
            name: "Novo Cliente",
            email: "email@email.com",
            phone: 666666,
            coordinate_x: 36,
            coordinate_y: 50
        };

        const mockClientId = 1; // O ID simulado retornado pelo banco de dados
        mockClientRepository.create.mockResolvedValue(mockClientId);

        // Executa o caso de uso
        const result = await createClientUseCase.execute(mockCreateClientDto);

        // Verifica se o método create foi chamado com os argumentos corretos
        expect(mockClientRepository.create).toHaveBeenCalledWith(mockCreateClientDto);

        // Verifica se o resultado é esperado
        expect(result.id).toBe(mockClientId);
    });
});

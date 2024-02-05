import PostgreeClient from "../../database/PostgreeClient";
import { IndexClientDTO } from "../../database/dto/IndexClientDTO";
import { ClientRepository } from "../../database/repositories/ClientRepository";
import { IRequest } from "../Interfaces/IController";
import { ListClientUseCase } from "./ListClientUseCase";

jest.mock("../../database/repositories/ClientRepository");

describe("ListClientUseCase", () => {
    let listClientUseCase: ListClientUseCase;

    beforeEach(() => {
        jest.clearAllMocks();

        const mockPostgreeClient = {} as PostgreeClient;

        listClientUseCase = new ListClientUseCase(new ClientRepository(mockPostgreeClient));
    });

    it("should return a list of customers", async () => {
        const mockClients: IndexClientDTO[] = [
            {
                id: 1,
                name: "client",
                email: "email@email.com",
                phone: 55555555,
                coordinate_x: 25,
                coordinate_y: 50,
            },
            {
                id: 2,
                name: "client 2",
                email: "email2@email.com",
                phone: 66666,
                coordinate_x: 80,
                coordinate_y: 90,
            },
        ];

        jest.spyOn(listClientUseCase["clientRepo"], "findAll").mockResolvedValue(mockClients);

        const validRequest: IRequest = {
            body: {},
            params: {},
        };

        const result = await listClientUseCase.execute(validRequest);

        expect(result.clients).toEqual(mockClients);
    });
});

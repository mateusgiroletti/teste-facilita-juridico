import { IController, IRequest, IResponse } from "../Interfaces/IController";
import { ListClientUseCase } from "../useCases/ListClientUseCase";

export class ListClientController implements IController {
    constructor(private readonly listClientUseCase: ListClientUseCase) { }

    async handle(request: IRequest): Promise<IResponse> {
        try {
            const { clients } = await this.listClientUseCase.execute(request);

            return {
                statusCode: 200,
                body: {
                    clients,
                },
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: error.issues,
            };
        }
    }
}
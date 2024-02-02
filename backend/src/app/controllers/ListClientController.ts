import { IController, IRequest, IResponse } from "../Interfaces/IController";
import { ListClientUseCase } from "../useCases/ListClientUseCase";

export class ListClientController implements IController {
    constructor(private readonly listClientUseCase: ListClientUseCase) { }

    async handle({ params }: IRequest): Promise<IResponse> {
        try {
            console.log(params);

            const client = await this.listClientUseCase.execute();

            return {
                statusCode: 200,
                body: {
                    client,
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
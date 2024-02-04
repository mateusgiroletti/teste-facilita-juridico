import { IController, IRequest, IResponse } from "../Interfaces/IController";
import { FindBestRouteUseCase } from "../useCases/FindBestRouteUseCase";

export class FindBestRouteController implements IController {
    constructor(private readonly findBestRouteUseCase: FindBestRouteUseCase) { }

    async handle(request: IRequest): Promise<IResponse> {
        try {
            const { clients } = await this.findBestRouteUseCase.execute(request);

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
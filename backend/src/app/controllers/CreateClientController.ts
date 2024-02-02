import { ZodError, z } from "zod";

import { CreateClientUseCase } from "../useCases/CreateClientUseCase";
import { IController, IRequest, IResponse } from "../Interfaces/IController";

const schema = z.object({
    name: z.string().min(1).max(255),
    email: z.string().email().min(1).max(150),
    phone: z.string().min(1).max(20).transform(value => {
        const parsedNumber = Number(value);
        return parsedNumber;
    }),
    coordinate_x: z.string().min(1).max(11).transform(value => {
        const parsedCoordinateX = Number(value);
        return parsedCoordinateX;
    }),
    coordinate_y: z.string().min(1).max(11).transform(value => {
        const parsedCoordinateY = Number(value);
        return parsedCoordinateY;
    })
});

export class CreateClientController implements IController {
    constructor(private readonly createClientUseCase: CreateClientUseCase) { }

    async handle({ body }: IRequest): Promise<IResponse> {
        try {
            const {
                name,
                email,
                phone,
                coordinate_x,
                coordinate_y
            } = schema.parse(body);

            const { id } = await this.createClientUseCase.execute({
                name,
                email,
                phone,
                coordinate_x,
                coordinate_y
            });

            return {
                statusCode: 200,
                body: {
                    id,
                },
            };
        } catch (error) {
            if (error instanceof ZodError) {
                return {
                    statusCode: 400,
                    body: error.issues,
                };
            }
            throw Error;
        }
    }
}
import { Request, Response } from "express";
import { IController } from "../app/Interfaces/IController";


export function routeAdapter(controller: IController) {
    return async (request: Request, response: Response) => {
        const { statusCode, body } = await controller.handle({
            body: request.body,
            params: request.params,
            query: request.query as Record<string, string | string[] | undefined>,
        });

        response.status(statusCode).json(body);
    };
}
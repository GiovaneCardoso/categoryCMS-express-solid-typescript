import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  async handle(request: Request, response: Response) {
    const listCategoriesService = container.resolve(ListCategoriesUseCase);
    const categories = await listCategoriesService.execute();

    return response.json(categories);
  }
}

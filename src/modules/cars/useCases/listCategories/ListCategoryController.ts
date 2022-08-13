import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesUseCase) {}
  async handle(request: Request, response: Response) {
    const categories = await this.listCategoriesService.execute();
    return response.json(categories);
  }
}

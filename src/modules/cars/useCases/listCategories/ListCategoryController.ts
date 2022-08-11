import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesUseCase) {}
  handle(request: Request, response: Response) {
    const categories = this.listCategoriesService.execute();
    return response.json(categories);
  }
}

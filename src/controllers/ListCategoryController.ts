import { ListCategoriesService } from "../services/listCategories/ListCategoriesService";
import { Request, Response } from "express";

export class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesService) {}
  handle(request: Request, response: Response) {
    const categories = this.listCategoriesService.execute();
    return response.json(categories);
  }
}

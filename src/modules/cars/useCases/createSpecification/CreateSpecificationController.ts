import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  constructor(private listCategoriesService: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const categories = this.listCategoriesService.execute({
      name,
      description,
    });
    return response.json(categories);
  }
}

import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const listCategoriesService = container.resolve(CreateSpecificationUseCase);
    const categories = listCategoriesService.execute({
      name,
      description,
    });
    return response.json(categories);
  }
}

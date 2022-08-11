import { CategoryRepository } from "../../repositories/implementations/CategoryRepositories";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

import { ListCategoriesController } from "./ListCategoryController";

const categoriesRepository = CategoryRepository.getInstance();
const listCategoriesService = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesService
);

export { listCategoriesController };

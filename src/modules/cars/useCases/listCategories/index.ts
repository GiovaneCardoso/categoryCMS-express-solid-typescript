import { CategoryRepository } from "../../repositories/implementations/CategoryRepositories";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

import { ListCategoriesController } from "./ListCategoryController";
export default () => {
  const categoriesRepository = new CategoryRepository();
  const listCategoriesService = new ListCategoriesUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoriesService
  );

  return listCategoriesController;
};

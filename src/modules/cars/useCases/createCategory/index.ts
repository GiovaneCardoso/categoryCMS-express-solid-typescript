import { CategoryRepository } from "../../repositories/implementations/CategoryRepositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
  const categoryRepository = new CategoryRepository();
  const createCategoryService = new CreateCategoryUseCase(categoryRepository);
  const createCategoryController = new CreateCategoryController(
    createCategoryService
  );
  return createCategoryController;
};

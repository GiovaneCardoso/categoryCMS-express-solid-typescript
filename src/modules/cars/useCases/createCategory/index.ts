import { CategoryRepository } from "../../repositories/implementations/CategoryRepositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance();
const createCategoryService = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryService
);

export { createCategoryController };

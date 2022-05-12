import { CreateCategoryController } from "../../controllers/CreateCategoryController";
import { CategoryRepository } from "../../repositories/CategoryRepositories";
import { CreateCategoryService } from "./CreateCategoryService";

const categoryRepository = CategoryRepository.getInstance();
const createCategoryService = new CreateCategoryService(categoryRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryService
);

export { createCategoryController };

import { ListCategoriesController } from "../../controllers/ListCategoryController";
import { CategoryRepository } from "../../repositories/CategoryRepositories";
import { ListCategoriesService } from "./ListCategoriesService";

const categoriesRepository = CategoryRepository.getInstance();
const listCategoriesService = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesService
);

export { listCategoriesController };

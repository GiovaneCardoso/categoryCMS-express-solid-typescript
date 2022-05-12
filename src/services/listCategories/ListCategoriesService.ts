import { CategoryRepository } from "../../repositories/CategoryRepositories";

export class ListCategoriesService {
  constructor(private categoriesRepositories: CategoryRepository) {}

  execute() {
    const categories = this.categoriesRepositories.list();
    return categories;
  }
}

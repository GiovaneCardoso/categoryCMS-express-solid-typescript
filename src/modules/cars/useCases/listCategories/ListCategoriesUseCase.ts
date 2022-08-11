import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepositories: ICategoriesRepository) {}

  execute() {
    const categories = this.categoriesRepositories.list();
    return categories;
  }
}

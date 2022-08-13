import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepositories: ICategoriesRepository) {}

  async execute() {
    const categories = await this.categoriesRepositories.list();
    return categories;
  }
}

import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoriesRepositories: ICategoriesRepository
  ) {}

  async execute() {
    const categories = await this.categoriesRepositories.list();
    return categories;
  }
}

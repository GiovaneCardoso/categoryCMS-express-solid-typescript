import { CategoryRepository } from "../../repositories/CategoryRepositories";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepositories: CategoryRepository) {}

  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepositories.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepositories.create({ name, description });
  }
}
export { CreateCategoryService };

import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoriesRepositories: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest) {
    const categoryAlreadyExists = await this.categoriesRepositories.findByName(
      name
    );
    console.log(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepositories.create({ name, description });
  }
}
export { CreateCategoryUseCase };

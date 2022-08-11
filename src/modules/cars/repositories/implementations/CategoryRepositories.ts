import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoryRepository implements ICategoriesRepository {
  private categories: Category[];
  private static instance: CategoryRepository;

  static getInstance(): CategoryRepository {
    if (!CategoryRepository.instance) {
      CategoryRepository.instance = new CategoryRepository();
    }
    return CategoryRepository.instance;
  }

  private constructor() {
    this.categories = [];
  }
  create({ name, description }): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}
export { CategoryRepository };

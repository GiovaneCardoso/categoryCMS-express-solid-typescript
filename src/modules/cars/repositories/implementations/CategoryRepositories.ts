import { getRepository, Repository } from "typeorm";
import { dataSource } from "../../../../database";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";
class CategoryRepository implements ICategoriesRepository {
  private repository: Repository<Category>;
  constructor() {
    this.repository = dataSource.getRepository(Category);
  }
  async create({ name, description }): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    console.log("cat", categories);
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOneBy({ name });
    return category;
  }
}
export { CategoryRepository };

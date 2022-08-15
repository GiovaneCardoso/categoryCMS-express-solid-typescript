import { Repository } from "typeorm";
import { dataSource } from "../../../../database";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepositories } from "../ISpecificationRepositories";

export class SpecificationRepository implements ISpecificationRepositories {
  private repository: Repository<Specification>;
  constructor() {
    this.repository = dataSource.getRepository(Specification);
  }
  async create({ name, description }): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);
  }
  async list(): Promise<Specification[]> {
    const list = await this.repository.find();
    return list;
  }
  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOneBy({ name });
    return specification;
  }
}

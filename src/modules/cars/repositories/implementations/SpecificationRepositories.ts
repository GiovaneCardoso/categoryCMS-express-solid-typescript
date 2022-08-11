import { Specification } from "../../model/Specification";
import { ISpecificationRepositories } from "../ISpecificationRepositories";

export class SpecificationRepository implements ISpecificationRepositories {
  private specification: Specification[];
  private static instance: SpecificationRepository;

  static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.instance) {
      SpecificationRepository.instance = new SpecificationRepository();
    }
    return SpecificationRepository.instance;
  }
  private constructor() {
    this.specification = [];
  }
  create({ name, description }): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specification.push(specification);
  }
  list(): Specification[] {
    return this.specification;
  }
  findByName(name: string): Specification {
    const specification = this.specification.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

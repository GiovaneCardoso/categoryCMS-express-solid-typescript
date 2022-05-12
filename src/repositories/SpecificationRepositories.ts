import { Specification } from "../model/Specification";

interface ICreateSpecification {
  name: string;
  description: string;
}
export class SpecificationRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }
  create({ name, description }: ICreateSpecification): void {
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

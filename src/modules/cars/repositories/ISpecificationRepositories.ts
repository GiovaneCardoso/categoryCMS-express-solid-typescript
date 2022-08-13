import { Specification } from "../entities/Specification";

interface ICreateSpecification {
  name: string;
  description: string;
}
interface ISpecificationRepositories {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ name, description }: ICreateSpecification): void;
}
export { ISpecificationRepositories };

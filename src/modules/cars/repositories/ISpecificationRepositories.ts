import { Specification } from "../entities/Specification";

interface ICreateSpecification {
  name: string;
  description: string;
}
interface ISpecificationRepositories {
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
  create({ name, description }: ICreateSpecification): Promise<void>;
}
export { ISpecificationRepositories };

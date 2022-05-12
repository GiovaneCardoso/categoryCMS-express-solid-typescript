import { SpecificationRepository } from "../repositories/SpecificationRepositories";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepositories: SpecificationRepository) {}

  execute({ name, description }: IRequest) {
    const SpecificationAlreadyExists =
      this.specificationRepositories.findByName(name);
    if (SpecificationAlreadyExists) {
      throw new Error("Specification already exists");
    }

    this.specificationRepositories.create({ name, description });
  }
}
export { CreateSpecificationService };

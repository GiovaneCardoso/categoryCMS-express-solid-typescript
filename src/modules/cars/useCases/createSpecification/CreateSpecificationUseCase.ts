import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepositories";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
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
export { CreateSpecificationUseCase };

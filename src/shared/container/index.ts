import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoryRepository } from "../../modules/cars/repositories/implementations/CategoryRepositories";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepositories";
import { ISpecificationRepositories } from "../../modules/cars/repositories/ISpecificationRepositories";

container.registerSingleton<ICategoriesRepository>(
  "CategoryRepository",
  CategoryRepository
);
container.registerSingleton<ISpecificationRepositories>(
  "SpecificationRepository",
  SpecificationRepository
);

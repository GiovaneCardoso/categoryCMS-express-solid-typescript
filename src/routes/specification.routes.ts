import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const specificationController = new CreateSpecificationController();
specificationsRoutes.post("/", specificationController.handle);

export { specificationsRoutes };

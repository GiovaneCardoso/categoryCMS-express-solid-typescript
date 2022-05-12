import { Router } from "express";
import { SpecificationRepository } from "../repositories/SpecificationRepositories";
import { CreateSpecificationService } from "../services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepositories = new SpecificationRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepositories
  );

  try {
    createSpecificationService.execute({ name, description });
    return res.status(201).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

specificationsRoutes.get("/", (_, res) => {
  const specifications = specificationsRepositories.list();

  return res.status(200).json(specifications);
});
export { specificationsRoutes };

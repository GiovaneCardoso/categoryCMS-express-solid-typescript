import { Router } from "express";
import { createCategoryController } from "../services/createCategory";
import { listCategoriesController } from "../services/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});
export { categoriesRoutes };

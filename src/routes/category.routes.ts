import { Router } from 'express'
import { CategoryRepository } from '../repositories/CategoryRepositories'
import { CreateCategoryService } from '../services/CreateCategoryService'

const categoriesRoutes = Router()
const categoriesRepositories = new CategoryRepository()

categoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body
    const createCategoryService = new CreateCategoryService(categoriesRepositories)

    try {
        createCategoryService.execute({ name, description })
        return res.status(201).send()
    } catch(error) {
        res.status(400).json({ message: error.message })
    }

})

categoriesRoutes.get('/', (_, res) => {
    const categories = categoriesRepositories.list()

    return res.status(200).json(categories)
}) 
export { categoriesRoutes }
import { Router } from 'express'
import uploads from './upload'
import {AuthenticateUserController} from './controllers/AuthenticateUserController'
import {CreateUserController} from './controllers/CreateUserController'
import {CreateProductController} from './controllers/CreateProductController'
import { CreateProductImagesController } from './controllers/CreateProductImagesController'
import { ensureAuthenticated }  from './middlewares/ensureAuthenticated'

import './database'
import { ListProductController } from './controllers/ListProductController'
import { UpdateProductController } from './controllers/UpdateProductController'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
const userController = new CreateUserController()
const productController = new CreateProductController()
const productImageController = new CreateProductImagesController()
const listProductController = new ListProductController()
const updateProductController = new UpdateProductController()

router.post('/users', ensureAuthenticated, userController.handle)
router.post('/products', productController.handle)
router.get('/products', listProductController.handle)
router.post('/product/:id', updateProductController.handle)
router.post('/upload', uploads.single('file'), productImageController.handle)
router.post('/login', authenticateUserController.handle)

export default router;
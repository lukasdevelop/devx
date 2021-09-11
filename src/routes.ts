import { Router } from 'express'
import uploads from './upload'
import AuthenticateUserController from './controllers/AuthenticateUserController'
import CreateUserController from './controllers/CreateUserController'
import CreateProductController from './controllers/CreateProductController'
import CreateProductImagesController from './controllers/CreateProductImagesController'
import { ensureAuthenticated }  from './middlewares/ensureAuthenticated'

import './database'
import  ListProductController  from './controllers/ListProductController'
import  UpdateProductController  from './controllers/UpdateProductController'
import DeleteProductController  from './controllers/DeleteProductController'
import ConfirmedUserController from './controllers/ConfirmedUserController'

const router = Router()

router.post('/users', CreateUserController.handle)
router.post('/login', AuthenticateUserController.handle)
router.get('/confirmation/:token', ConfirmedUserController.handle)
router.put('/product/:id', ensureAuthenticated, UpdateProductController.handle)
router.post('/products', ensureAuthenticated, CreateProductController.handle)
router.get('/products', ensureAuthenticated, ListProductController.handle)
router.post('/upload', ensureAuthenticated, uploads.single('file'), CreateProductImagesController.handle)
router.delete('/product/:id', ensureAuthenticated, DeleteProductController.handle)

export default router;
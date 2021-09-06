import { Router } from 'express'
import uploads from './upload'
import {AuthenticateUserController} from './controllers/AuthenticateUserController'
import {CreateUserController} from './controllers/CreateUserController'
import {CreateProductController} from './controllers/CreateProductController'
import { ensureAuthenticated }  from './middlewares/ensureAuthenticated'

import './database'
import { ListProductController } from './controllers/ListProductController'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
const userController = new CreateUserController()
const productController = new CreateProductController()
const listProductController = new ListProductController()

router.post('/users', ensureAuthenticated, userController.handle)
router.post('/products', productController.handle)
router.get('/products', listProductController.handle)
router.post('/upload', uploads.single('file'), (req, res) => {
    console.log(req.file)

    return res.send('ok')
})
router.post('/login', authenticateUserController.handle)

export default router;
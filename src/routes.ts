import { Router } from 'express'
import uploads from './upload'
import {AuthenticateUserController} from './controllers/AuthenticateUserController'
import {CreateUserController} from './controllers/CreateUserController'
import {CreateProductController} from './controllers/CreateProductController'
import { CreateProductImagesController } from './controllers/CreateProductImagesController'
import { ensureAuthenticated }  from './middlewares/ensureAuthenticated'

import './database'
import  ListProductController  from './controllers/ListProductController'
import { UpdateProductController } from './controllers/UpdateProductController'
import { DeleteProductController } from './controllers/DeleteProductController'
import Mail from './mail/mail'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
const userController = new CreateUserController()
const productController = new CreateProductController()
const productImageController = new CreateProductImagesController()
const updateProductController = new UpdateProductController()
const deleteProductController = new DeleteProductController()

router.put('/product/:id', updateProductController.handle)
router.post('/users', ensureAuthenticated, userController.handle)
router.post('/products', productController.handle)
router.get('/products', ListProductController.handle)
router.post('/upload', uploads.single('file'), productImageController.handle)
router.post('/login', authenticateUserController.handle)
router.delete('/product/:id', deleteProductController.handle)
router.post('/', (req, res) => {
    const {to, subject, message } = req.body

    Mail.to = to;
    Mail.subject = subject;
    Mail.message = message;

    let result = Mail.sendMail();

    res.status(200).json({result: result})

})

export default router;
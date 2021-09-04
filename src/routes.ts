import { Router } from 'express'
import {AuthenticateUserController} from './controllers/AuthenticateUserController'
import {CreateUserController} from './controllers/CreateUserController'

import './database'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
const userController = new CreateUserController()

router.post('/login', authenticateUserController.handle)
router.post('/users', userController.handle)

export default router;
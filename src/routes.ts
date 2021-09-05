import { Router } from 'express'
import {AuthenticateUserController} from './controllers/AuthenticateUserController'
import {CreateUserController} from './controllers/CreateUserController'
import { ensureAuthenticated }  from './middlewares/ensureAuthenticated'

import './database'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
const userController = new CreateUserController()

router.post('/users', ensureAuthenticated, userController.handle)
router.post('/login', authenticateUserController.handle)

export default router;
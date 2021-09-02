import { Router } from 'express'
import {UserController} from '../src/controllers/UserController'

const routes = Router()

const userController = new UserController()

routes.get('/users', userController.handle)

export default routes;
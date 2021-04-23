import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.post('/users/create', UserController.create);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.indexById);
routes.put('/update', UserController.update);
routes.delete('/users/:id', UserController.remove);

export default routes;

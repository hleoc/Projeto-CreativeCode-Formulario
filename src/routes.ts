import { Router } from 'express';
import UserController from './controllers/UserController';
import EnderecoController from './controllers/EnderecoController';

const routes = Router();

routes.post('/users/create', UserController.create);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.indexById);
routes.put('/users/update', UserController.update);
routes.delete('/users/delete/:id', UserController.remove);

routes.post('/endereco/create', EnderecoController.create);
routes.get('/encereco', EnderecoController.index);
routes.get('/endereco/:id', EnderecoController.indexById);
routes.put('/endereco/update', EnderecoController.update);
routes.delete('/endereco/delete/:id', EnderecoController.remove);

export default routes;

import { Router } from 'express';
import UserController from './controllers/UserController';
import EnderecoController from './controllers/EnderecoController';
import LoginController from './controllers/LoginController';
import Auth from './middleware/Auth';

const routes = Router();

routes.post('/users/create', UserController.create);
routes.post('/users/login', LoginController.login);
routes.get('/users', Auth, UserController.index);
routes.get('/users/:id', Auth, UserController.indexById);
routes.put('/users/update', Auth, UserController.update);
routes.delete('/users/delete/:id', Auth, UserController.remove);

routes.post('/endereco/create', Auth, EnderecoController.create);
routes.get('/endereco', Auth, EnderecoController.index);
routes.get('/endereco/:id', Auth, EnderecoController.indexById);
routes.put('/endereco/update', Auth, EnderecoController.update);
routes.delete('/endereco/delete/:id', Auth, EnderecoController.remove);

export default routes;

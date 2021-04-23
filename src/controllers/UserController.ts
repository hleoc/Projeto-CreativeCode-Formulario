import { Request, Response } from 'express';

import { createUser, getByEmail, findAll, findOne, updateUser, removeUser } from '../schemas/User';

function validateEmail(email: string) {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regexEmail.test(String(email).toLowerCase());
}

class UserController {
  public async create(req: Request, res: Response) {
    try {
      const { nome, telefone, email, idade, peso, senha, etinia } = req.body;
      if (!validateEmail(email)) {
        return res.status(401).json({ message: 'Email inválido' });
      }
      /* const findEmail = await getByEmail(email);
      if (findEmail) {
        return res.status(401).json({ message: 'Usuário já cadastrado' });
      } */
      const newUser = await createUser(nome, telefone, email, idade, peso, senha, etinia);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: 'Algo deu errado.' });
    }
  }

  public async index(req: Request, res: Response) {
    try {
      const users = await findAll();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Algo deu errado.' });
    }
  }

  public async indexById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const users = await findOne(parseInt(id));
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Algo deu errado.' });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { nome, telefone, email, idade, peso, senha, etinia } = req.body;
      if (!validateEmail(email)) {
        return res.status(401).json({ message: 'Email inválido' });
      }
      const editUser = await updateUser(nome, telefone, email, idade, peso, senha, etinia);
      return res.status(201).json(editUser);
    } catch (error) {
      return res.status(500).json({ message: 'Algo deu errado.' });
    }
  }

  public async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const users = await removeUser(Number(id));
      console.log("passei por aqui");
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Algo deu errado.' });
    }
  }
}

export default new UserController();

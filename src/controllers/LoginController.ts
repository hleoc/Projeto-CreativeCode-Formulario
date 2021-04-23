import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

import { getByEmail } from '../schemas/User';

class LoginController {
  public async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;
      const findEmail = await getByEmail(email);
      if (!findEmail) {
        return res.status(401).json({ message: 'Email incorreto' });
      }
      if (!senha) {
        return res.status(401).json({ message: 'Email incorreto' });
      }
      const token = jwt.sign({ email }, 'secret', { expiresIn: '15d' });
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: 'Algo deu errado.' });
    }
  }
}

export default new LoginController();

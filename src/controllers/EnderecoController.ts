import { Request, Response } from 'express';

import {
  createAddress,
  findAll,
  findOneAddress,
  updateAddress,
  removeAddress,
} from '../schemas/Endereco';

class AddressController {
  public async create(req: Request, res: Response) {
    try {
      const { idUser, endereco, numero, complemento, cep, cidade, estado } = req.body;
      const newAddress = await createAddress(
        idUser,
        endereco,
        numero,
        complemento,
        cep,
        cidade,
        estado,
      );

      return res.status(201).json(newAddress);
    } catch (error) {
      return res.status(500).json({ message: 'Algo deu errado.' });
      // console.error(error);
    }
  }

  public async index(req: Request, res: Response) {
    try {
      const address = await findAll();
      return res.json(address);
    } catch (error) {
      return res.status(500).json({ message: 'Algo deu errado.' });
    }
  }

  public async indexById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const address = await findOneAddress(Number(id));
      return res.status(200).json(address);
    } catch (error) {
      return res.status(500).json({ message: 'Algo deu errado.' });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { idUser, endereco, numero, complemento, cep, cidade, estado } = req.body;
      const editAddress = await updateAddress(
        idUser,
        endereco,
        numero,
        complemento,
        cep,
        cidade,
        estado,
      );
      
      return res.status(201).json(editAddress);
    } catch (error) {
      return res.status(500).json({ message: 'Algo deu errado.' });
    }
  }

  public async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const address = await removeAddress(Number(id));
      return res.status(200).json(address);
    } catch (error) {
      return res.status(500).json({ message: 'Algo deu errado.' });
    }
  }
}

export default new AddressController();

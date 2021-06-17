import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
    async store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

        const userExiste = await repository.findOne({ where: { email } })

        if (userExiste) {
            return  res.status(404).json('E-mail já cadastrado!!')
        }

        const user = repository.create({ email, password });
        await repository.save(user);

        return res.json(user);

    }
}

export default new UserController();
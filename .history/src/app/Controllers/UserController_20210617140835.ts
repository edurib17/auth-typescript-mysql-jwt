import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
    store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

        const userExiste = repository.findOne({ where: { email } })

        if(!userExiste){
            return res.send(409)
        }

    }
}

export default new UserController();
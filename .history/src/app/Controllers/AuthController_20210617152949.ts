import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class AuthController {
    async store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

        const user = await repository.findOne({ where: { email } })

    }
}

export default new AuthController();
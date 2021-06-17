import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
    store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

    }
}

export default new UserController();
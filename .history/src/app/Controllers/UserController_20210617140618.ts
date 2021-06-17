import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

class UserController {
    store(req: Request, res: Response) {
        return res.send('OK')
    }
}

export default new UserController();
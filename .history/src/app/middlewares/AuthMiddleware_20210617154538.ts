import { Request, Response, NextFunction } from 'express';

export default function authMiddleware(
    req: Request, res: Response, next: NextFunction
) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.sendStatus(401);
    }

    const token = authorization.replace('Bearer', '').trim();

    try {

    } catch {
        return res.sendStatus(401);
    }
}
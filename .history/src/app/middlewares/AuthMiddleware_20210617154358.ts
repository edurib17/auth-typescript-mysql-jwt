import { Request, Response, NextFunction } from 'express';

export default function authMiddleware(
    req: Request, res: Response, next: NextFunction
) {
    const { authorization } = req.headers;



}
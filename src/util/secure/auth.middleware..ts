import { IPayload } from '../service/auth.service';
import { Request, Response, NextFunction } from 'express';
import { UNAUTHORIZED } from 'http-status-codes';
import { ErrorHandler } from '../../error';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers['authorization'] || '';
    if (!token) {
        next(new ErrorHandler(UNAUTHORIZED, 'no token provided'));
        return;
    }
    try {
        const payload = jwt.verify(token, 'secre198247242') as IPayload;
        //console.log(payload);
        req.user = payload.user;
        next();
    } catch (err) {
        next(err);
    }
};

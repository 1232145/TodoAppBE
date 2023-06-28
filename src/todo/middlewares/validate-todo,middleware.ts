import { NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';


export class ValidateTodo implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(' ')[1];

        try {
            const decodedToken = jwt.verify(token, 'secret_key');

            if (decodedToken) {
                next();
            }
        }
        catch (err) {
            console.log(err);
            throw new UnauthorizedException('Invalid token');
        }
    }
}
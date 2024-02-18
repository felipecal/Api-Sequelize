// authMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): Response<Object> | void => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw new Error('Authorization header not found');
    }
    const [bearer, token] = authorizationHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
      throw new Error('Invalid Authorization header format');
    }

    const secretKey: string | undefined = process.env.JWT_SECRET;
    if (!secretKey) {
      throw new Error('JWT_SECRET is not defined in the environment');
    }
    const decodedToken = verify(token, secretKey) as { user_id: number };
    req.body.cod_user = decodedToken.user_id;
    next();
  } catch (error: unknown) {
    console.error(`Authentication error ${error}`);
    return res.status(401).json({ error: `Invalid Token ${error}` });
  }
};

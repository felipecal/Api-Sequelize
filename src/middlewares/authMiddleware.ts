// authMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): Response<Object> | void => {
  try {
    const { token } = req.body;
    const secretKey: string | undefined = process.env.JWT_SECRET;
    if (!secretKey) {
      throw new Error('JWT_SECRET is not defined in the environment');
    }
    if (!token) {
      return res.status(401).json({ error: `Token is not defined` });
    }
    const decodedToken = verify(token, secretKey) as { user_id: any };
    req.body.cod_user = decodedToken.user_id;
    next();
  } catch (error: unknown) {
    console.error(`Authentication error ${error}`);
    return res.status(401).json({ error: `Invalid Token ${error}` });
  }
};

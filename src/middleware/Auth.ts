import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

export default function auth (req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'missing auth token' });
    const t = token.replace('Bearer', '').trim();
    const payload = jwt.verify(token, 'secret');
    return next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

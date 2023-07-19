import { sign, verify } from 'jsonwebtoken';
import mongoose from 'mongoose';
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = async (
  username: string,
  _id: mongoose.Types.ObjectId,
) => {
  const jwt = sign({ username, _id }, JWT_SECRET || 'jwt');
  return jwt;
};

const verifyToken = async (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET || 'jwt');
  return isOk;
};

export { generateToken, verifyToken };

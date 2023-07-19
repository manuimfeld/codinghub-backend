import { Request } from 'express';
export interface UserInfo extends Request {
  user: any; // or any other type
}

import { UserModel } from '../models/userModel';

export interface CreateUser {
  created?: boolean;
  userResult?: User;
  error?: string;
}

export interface CreateUserInput {
  user_name: string;
  password: string;
  email: string;
}

export interface User {
  user_id?: number;
  user_name?: string;
  password?: string;
  email?: string;
  created?: boolean;
  error?: string;
}

export interface UpdateUser {
  message?: string;
  content?: [number, UserModel[]] | { error: string };
  error?: string;
}

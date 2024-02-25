import { UserModel } from '../models/userModel';

export interface CreateUser {
  status?: {
    statusOfUser: string;
  };
  userResult?: undefined;
  updateUserResult?: undefined;
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
  error?: string;
}

export interface UpdateUser {
  message?: string;
  content?: [number, UserModel[]] | { error: string };
  error?: string;
}

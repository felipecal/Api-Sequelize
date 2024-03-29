import { UserModel } from '../models/userModel';
import { Request } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AuthenticationResponse from '../interfaces/AuthenticationInterface';
import ValidateTokenResponse from '../interfaces/TokenInterface';
import { CreateUser, CreateUserInput, User } from '../interfaces/UserInterface';

export class UserService {
  public async getAllUsers(): Promise<UserModel[] | { error: string }> {
    try {
      const result = await UserModel.findAll();
      return result;
    } catch (error: unknown) {
      return { error: `Some error ocurred in getAllUsers ${error}` };
    }
  }

  async getUserById(req: Request): Promise<User> {
    try {
      const userId: string = req.params.id;
      const resultOfGetUserById = await UserModel.findByPk(userId);
      if (!resultOfGetUserById) throw new Error(`The user with id ${userId} was not found`);
      return resultOfGetUserById as User;
    } catch (error: unknown) {
      console.error(`Some error ocurred in getUserById ${error}`);
      return { error: `Some error ocurred in getUserById ${error}` };
    }
  }

  async authenticateUser(req: Request): Promise<AuthenticationResponse> {
    try {
      const { user_name, password } = req.body;
      const user = await UserModel.findOne({
        where: {
          user_name: user_name,
        },
      });
      if (!user) {
        return { success: false, type: { username: 'Invalid username' }, message: 'User was not found' };
      } else {
        const passwordMatch = await bcrypt.compare(password, user.dataValues.password);
        if (passwordMatch) {
          const secret_key: string = process.env.JWT_SECRET || '1234';
          if (!secret_key) {
            throw new Error('JWT_SECRET is not defined in the environment');
          }
          const token = jwt.sign({ user_id: user.dataValues.user_id }, secret_key, { expiresIn: '24h' });
          const tokenWithBearer = `Bearer ${token}`;
          return { success: true, token: tokenWithBearer };
        } else {
          return { success: false, type: { password: 'Invalid password' }, message: 'Invalid Password' };
        }
      }
    } catch (error: unknown) {
      console.error(`Some error occurred in authenticateUser: ${error}`);
      return { error: `Some error occurred in authenticateUser: ${error}` };
    }
  }

  async validateToken(req: Request): Promise<ValidateTokenResponse> {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error('Token not found');
      }
      const [bearer, userToken] = token.split(' ');
      const secret_key: string = process.env.JWT_SECRET || '1234';
      if (!secret_key) {
        throw new Error('JWT_SECRET is not defined in the environment');
      }
      jwt.verify(userToken, secret_key);
      return { valid: true };
    } catch (error: unknown) {
      console.error(`Some error ocurred in validate user token`);
      return { valid: false };
    }
  }

  async createUser(req: Request): Promise<CreateUser> {
    try {
      const body: CreateUserInput = req.body;
      const { user_name, password, email } = body;

      if (!user_name || !password || !email) {
        throw new Error('Body can not be null');
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const userWithEmail = await UserModel.findOne({
        where: { email: body.email },
      });
      if (!userWithEmail) {
        const [user, created] = await UserModel.findOrCreate({
          where: {
            user_name,
          },
          defaults: {
            user_name,
            password: hashedPassword,
            email,
          },
        });
        const userResult = user.dataValues;
        return { userResult, created };
      } else {
        const userResult = userWithEmail.dataValues;
        return { userResult, created: false };
      }
    } catch (error: unknown) {
      console.error(`Erro ao criar/atualizar usuário: ${error}`);
      return { error: `Erro ao criar/atualizar usuário: ${error}` };
    }
  }

  async updateUser(req: Request): Promise<User> {
    try {
      const user_id = req.params.id;
      const body = req.body;
      const user = await UserModel.findByPk(user_id);
      if (!user) throw new Error('User not found');
      const resultOfUpdateUser = await UserModel.update(body, {
        where: { user_id },
        returning: true,
      });
      return resultOfUpdateUser[1][0].dataValues;
    } catch (error: unknown) {
      console.error(`Some error ocurred in updateUser ${error}`);
      return { error: `Some error ocurred in updateUser ${error}` };
    }
  }

  async autoUpdateUser(req: Request): Promise<User> {
    try {
      const body = req.body;
      const user = await UserModel.findByPk(body.cod_user);
      if (!user) throw new Error('User not found');
      const resultOfAutoUpdateUser = await UserModel.update(body, {
        where: { user_id: body.cod_user },
        returning: true,
      });
      return resultOfAutoUpdateUser[1][0].dataValues;
    } catch (error: unknown) {
      console.error(`Some error ocurred in autoUpdateUser ${error}`);
      return { error: `Some error ocurred in autoUpdateUser ${error}` };
    }
  }

  async deleteUserById(req: Request): Promise<void | { error: string }> {
    try {
      const userId = req.params.id;
      const getUser = await UserModel.findByPk(userId);
      if (getUser) {
        const deleteUser = await getUser.destroy();
        return deleteUser;
      } else {
        throw new Error(`User with id ${userId} was not found`);
      }
    } catch (error: unknown) {
      console.error(`Some error ocurred in deleteUserByID ${error}`);
      return { error: `Some error ocurred in deleteUserByID ${error}` };
    }
  }
}

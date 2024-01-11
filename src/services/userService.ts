import { UserModel } from '../models/userModel';
import { Request } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserService {
  public async getAllUsers() {
    const result = await UserModel.findAll();
    return result;
  }

  async getUserById(req: Request) {
    const userId = req.params.id;
    const resultOfGetUserById = await UserModel.findByPk(userId);
    return resultOfGetUserById;
  }

  async authenticateUser(req: Request) {
    const { user_name, password } = req.body;
    try {
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
          const secret_key = process.env.JWT_SECRET;
          if (!secret_key) {
            throw new Error('JWT_SECRET is not defined in the environment');
          }
          const token = jwt.sign({ user_id: user.dataValues.user_id }, secret_key, { expiresIn: '24h' });
          return { success: true, token: token };
        } else {
          return { success: false, type: { password: 'Invalid password' }, message: 'Invalid Password' };
        }
      }
    } catch (error: any) {
      throw new Error(`Some error occurred in authenticateUser: ${error.message}`);
    }
  }

  async validateToken(req: Request) {
    try {
      const { token } = req.body;
      const secret_key = process.env.JWT_SECRET;
      if (!secret_key) {
        throw new Error('JWT_SECRET is not defined in the environment');
      }
      const resultToken = jwt.verify(token, secret_key);
      console.log('resultToken', resultToken);
      return { valid: true };
    } catch (error) {
      return { valid: false };
    }
  }

  async createUser(req: Request) {
    const body = req.body;
    console.log('req.body', body);

    const status = { statusOfUser: '' };

    try {
      const hashedPassword = await bcrypt.hash(body.password, 12);
      const [user, created] = await UserModel.findOrCreate({
        where: {
          email: body.email,
        },
        defaults: {
          user_name: body.user_name,
          password: hashedPassword,
          email: body.email,
        },
      });

      if (!created) {
        const userId = user.dataValues.user_id;
        const updateUser = await UserModel.update(
          {
            user_name: body.user_name,
            password: hashedPassword,
            email: body.email,
          },
          {
            where: { user_id: userId },
            returning: true,
          },
        );
        status.statusOfUser = 'updated';
        const updateUserResult = updateUser[1][0].dataValues;
        return { updateUserResult, status };
      }
      const userResult = user.dataValues;
      return { userResult, status };
    } catch (error) {
      console.error(`Erro ao criar/atualizar usuário: ${error}`);
      throw error;
    }
  }

  async updateUser(req: Request) {
    const userId = req.params.id;
    const body = req.body;
    const user = await UserModel.findByPk(userId);
    if (!user) throw new Error('User not found');
    const resultOfUpdateUser = await UserModel.update(body, {
      where: { user_id: userId },
      returning: true,
    });
    return resultOfUpdateUser;
  }

  async deleteUserById(req: Request) {
    const userId = req.params.id;
    const getUser = await UserModel.findByPk(userId);
    if (getUser) {
      const deleteUser = await getUser.destroy();
      return deleteUser;
    } else {
      console.log(`User with id ${userId} was not found`);
    }
  }
}

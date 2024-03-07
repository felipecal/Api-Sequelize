import { UserService } from '../services/User.service';
import { Request, Response } from 'express';

export class UserController {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  public async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this._userService.getAllUsers();
      return res.status(200).json(result);
    } catch (error: unknown) {
      return res.status(501).json(`Some error ocurred in getAllUsers ${error}`);
    }
  }

  async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this._userService.getUserById(req);
      if (result === null) {
        return res.status(404).json({ Message: `User with id ${req.params.id} was not found` });
      } else {
        return res.status(200).json(result);
      }
    } catch (error: unknown) {
      return res.status(500).json({ Message: `Some error occurred in getUserById: ${error}` });
    }
  }

  public async authenticateUser(req: Request, res: Response): Promise<Response> {
    try {
      const resultOfAuthenticateUser = await this._userService.authenticateUser(req);
      if (resultOfAuthenticateUser === undefined) {
        return res.status(401).json({ message: 'User was not found.' });
      }
      if (resultOfAuthenticateUser) {
        return res.status(200).json(resultOfAuthenticateUser);
      } else {
        return res.status(401).json(resultOfAuthenticateUser);
      }
    } catch (error: unknown) {
      console.error(`Erro na autenticação: ${error}`);
      return res.status(401).json({ message: 'Authentication error.' });
    }
  }

  public async validateUserToken(req: Request, res: Response): Promise<Response> {
    try {
      const resultOfValidateToken = await this._userService.validateToken(req);
      return res.status(200).json(resultOfValidateToken);
    } catch (error: unknown) {
      console.error(`Some error ocurred in validateUserToken ${error}`);
      return res.status(401).json({ message: 'Error in validate Token' });
    }
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this._userService.createUser(req);
      if (result?.error) return res.status(500).json('No result returned from createUser');
      if (result?.created === false) {
        if (result?.userResult?.email == req.body.email) {
          return res.status(200).json({
            message: 'User with this email already exist!',
            exist: true,
            field: 'email',
          });
        }
        if (result?.userResult?.user_name == req.body.user_name) {
          return res.status(200).json({
            message: 'User with this username already exist!',
            exist: true,
            field: 'user_name',
          });
        }
      }
      return res.status(201).json({
        message: 'User was created with success!',
        exist: false,
      });
    } catch (error: unknown) {
      return res.status(500).json(`Some error occurred in createUser ${error}`);
    }
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this._userService.updateUser(req);
      if (result.error) return res.status(404).json({ message: 'User was not found!', content: result });
      return res.status(200).json({ message: 'User was updated with success!', content: result });
    } catch (error: unknown) {
      return res.status(500).json(`Some error occurred in updateUser ${error}`);
    }
  }

  async autoUpdateUser(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this._userService.autoUpdateUser(req);
      if (result.error) return res.status(404).json({ message: 'User was not found!', content: result });
      return res.status(200).json({ message: 'User was updated with success!', content: result });
    } catch (error: unknown) {
      return res.status(500).json(`Some error occurred in autoUpdateUser ${error}`);
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this._userService.deleteUserById(req);
      if (result === null) {
        return res.status(404).json({ Message: `User with id ${req.params.id} was not found` });
      } else {
        return res.status(200).json({ message: `User Deleted with Success`, content: result });
      }
    } catch (error: unknown) {
      return res.status(500).json(`Some error occurred in deleteUser ${error}`);
    }
  }
}

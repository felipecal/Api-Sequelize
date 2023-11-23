import { UserService } from "../services/userService";
import { Request, Response } from "express";

export class UserController {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  public async getAllUsers(req: Request, res: Response) {
    try {
      const resultado = await this._userService.getAllUsers();
      res.status(200).json(resultado);
    } catch (error) {
      res.status(501).json(`Some error ocurred in getAllUsers ${error}`);
    }
  }

  async getUserById(req: any, res: any) {
    // Implementar lógica para obter usuário por ID, se necessário
  }

  async createUser(req: any, res: any) {
    try {
      // Implementar lógica para criar usuário, se necessário
      res.status(200).json('User Create with Success');
    } catch (error) {
      res.status(500).json('Some error occurred in createUser');
    }
  }

  async updateUser(req: any, res: any) {
    try {
      // Implementar lógica para atualizar usuário, se necessário
      res.status(200).json('User Update with Success');
    } catch (error) {
      res.status(500).json('Some error occurred in updateUser');
    }
  }

  async deleteUser(req: any, res: any) {
    try {
      // Implementar lógica para excluir usuário, se necessário
      res.status(200).json('User Deleted with Success');
    } catch (error) {
      res.status(500).json('Some error occurred in deleteUser');
    }
  }
}

import { UserService } from "../services/userService";
import { Request, Response } from "express";

export class UserController {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  public async getAllUsers(req: Request, res: Response) {
    try {
      const result = await this._userService.getAllUsers();
      res.status(200).json(result);
    } catch (error) {
      res.status(501).json(`Some error ocurred in getAllUsers ${error}`);
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const result = await this._userService.getUserById(req);
      res.status(200).json(result)
    } catch (error) {
      throw new Error(`Some error ocurred in getUserById ${error}`)
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const result = await this._userService.createUser(req);
      if (result.status.statusOfUser === 'updated') {
        res.status(200).json({ message: 'User was updated with success!', content: result.updateUserResult });
      } else {
        res.status(200).json({ message: 'User was created with success!', content: result.userResult });
      }
    } catch (error) {
      res.status(500).json(`Some error occurred in createUser ${error}`);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const result = this._userService.updateUser(req);
      res.status(200).json({ message: 'User was updated with success!', content: result });
    } catch (error) {
      res.status(500).json(`Some error occurred in updateUser ${error}`);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const result = this._userService.deleteUserById(req);
      res.status(200).json({ message: `User Deleted with Success`, content: result });
    } catch (error) {
      res.status(500).json(`Some error occurred in deleteUser ${error}`);
    }
  }
}

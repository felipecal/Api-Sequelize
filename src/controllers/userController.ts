import { UserModel } from "../database/models/userModel";
import { UserService } from "../services/userService";
import { Request, Response } from "express";

export class UserController {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  public async getAllUsers(req: Request, res: Response) {
    try {
      // const resultado = await this._userService.getAllUsers();
      const result = await UserModel.findAll();
      console.log(result);
      
      res.status(200).json(result);
    } catch (error) {
      res.status(501).json(`Some error ocurred in getAllUsers ${error}`);
    }
  }

  async getUserById(req: any, res: any) {
    try {
      const result = await this._userService.getUserById(req.body.id);
    } catch (error) {
      throw new Error(`Some error ocurred in getUserById ${error}`)
    }
  }

  async createUser(req: any, res: any) {
    try {
      const result = await this._userService.createUser(req.body);
      res.status(200).json(`User Create with Success`);
    } catch (error) {
      res.status(500).json(`Some error occurred in createUser ${error}`);
    }
  }

  async updateUser(req: any, res: any) {
    try {
      const result = this._userService.updateUser(req.body);
      res.status(200).json(`User Update with Success`);
    } catch (error) {
      res.status(500).json(`Some error occurred in updateUser ${error}`);
    }
  }

  async deleteUser(req: any, res: any) {
    try {
      const result = this._userService.deleteUserById(req.body.id);
      res.status(200).json(`User Deleted with Success`);
    } catch (error) {
      res.status(500).json(`Some error occurred in deleteUser ${error}`);
    }
  }
}

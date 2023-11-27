import { Json } from "sequelize/types/utils";
import { UserModel } from "../database/models/userModel";
import { AutoIncrement } from "sequelize-typescript";

export class UserService {
  public async getAllUsers() {
    const result = await UserModel.findAll();
    console.log(result);
    return result
  }

  async getUserById(userId: any) {
      const result = await UserModel.findByPk(userId);
      if( result === null) {
        console.log(`User with id ${userId} was not found`);
      }
      return result;
  }

  async createUser(body: any) {
    const result = await UserModel.create({
      user_name: body.user_name,
      password: body.password,
      email: body.email
    })
    return result
  }

  async updateUser(body: any) {

  }

  async deleteUserById(userId: any) {

  }
}
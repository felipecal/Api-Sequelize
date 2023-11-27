import { UserModel } from "../database/models/userModel";

export class UserService {
  public async getAllUsers() {
    const result = await UserModel.findAll();
    console.log(result);
    return result
  }

  async getUserById(userId: number) {
      const result = await UserModel.findByPk(userId);
      if( result === null) {
        console.log(`User with id ${userId} was not found`);
      }
      return result;
  }

  async createUser(body: any) {

  }

  async updateUser(body: any) {

  }

  async deleteUserById(userId: any) {

  }
}
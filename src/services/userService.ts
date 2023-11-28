import { Json } from "sequelize/types/utils";
import { UserModel } from "../database/models/userModel";
import { AutoIncrement } from "sequelize-typescript";

export class UserService {
  public async getAllUsers() {
    const result = await UserModel.findAll();
    console.log(result);
    return result
  }

  async getUserById(req: any) {
    const userId = req.params.id
    const resultOfGetUserById = await UserModel.findByPk(userId);
    if (resultOfGetUserById === null) {
      console.log(`User with id ${userId} was not found`);
    }
    return resultOfGetUserById;
  }

  async createUser(req: any) {
    const body = req.body
    const resultOfCreateUser = await UserModel.create({
      user_name: body.user_name,
      password: body.password,
      email: body.email
    })
    return resultOfCreateUser.dataValues
  }

  async updateUser(req: any) {
    const userId = req.params.id;
    const body = req.body;
    const user = await UserModel.findByPk(userId);
    console.log(user);
    if (!user) throw new Error('User not found');
    const resultOfUpdateUser = await UserModel.update(body, { where: { user_id: userId }, returning: true }); // TODO: Fazer a função retornar o objeto atualizado.
    return resultOfUpdateUser;
  }

  async deleteUserById(userId: any) {

  }
}
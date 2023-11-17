export class UserController {

  async getUserById(req: any, res: any){
    res.status(200).json('Get userById')
  }

  async getAllUsers(req: any, res: any) {
    try {
      res.status(200).json('Get all Users')
    } catch (error) {
      res.status(500).json('Some error occurred in GetAllUsers')      
    }
  }

  async createUser(req: any, res: any){
    try {
      res.status(200).json('User Create with Success')
    } catch (error) {
      res.status(500).json('Some error occurred in createUser')
    }
  }

  async updateUser(req: any, res: any){
    try {
      res.status(200).json('User Update with Success')
    } catch (error) {
      res.status(500).json('Some error occurred in updateUser')
    }
  }

  async deleteUser(req: any, res: any){
    try {
      res.status(200).json('User Deleted with Success')
    } catch (error) {
      res.status(500).json('Some error occurred in deleteUser')
    }
  }
}
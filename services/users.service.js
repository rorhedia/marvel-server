const UserModel = require('./../models/users.model');

class Users {
  async getAll() {
    return await UserModel.find();
  }

}

module.exports = Users;
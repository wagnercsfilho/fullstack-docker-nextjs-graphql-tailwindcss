const { MongoDataSource } = require("apollo-datasource-mongodb");
const { CACHE_TTL } = require("../config/constants");

class Users extends MongoDataSource {
  async getUsers(q) {
    let where;

    if (q) {
      where = {
        $or: [
          { name: { $regex: q, $options: "i" } },
          { email: { $regex: q, $options: "i" } },
          { cpf: q },
        ],
      };
    }

    return this.model.find(where).exec();
  }
}

module.exports = Users;

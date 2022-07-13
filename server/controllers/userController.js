const { userModel } = require("../models")

class UserController {

  async getUsers(_req, res) {
    const users = await userModel.findAll()
    const mapedUsers = users.map(user => user.dataValues)
    return res.status(200).send(mapedUsers)
  }

  async addUser(req, res) {
    const { name, password } = req.query
    const dublicates = await userModel.findAll({where: {name}})
    if (dublicates.length) {
      return res.send({error: 'user exists'})
    }
    const newUser = await userModel.create({ name, password })
    return res.status(200).send(newUser)
  }

}

module.exports = new UserController

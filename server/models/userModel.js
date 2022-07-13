const db = require('../db')
const { DataTypes } = require('sequelize')

const userModel = db.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  avatar: { type: DataTypes.STRING },
})

module.exports = userModel

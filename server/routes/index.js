const Router = require('express')
const apiRouter = new Router()
const userRoute = require('./userRoute')

apiRouter.use('/', userRoute)

module.exports = { 
  apiRouter, 
} 

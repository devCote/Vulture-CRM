require('dotenv').config()

//_____IMPORTS____________________________________________________

const express = require('express');
const seq = require('./db.js')
const cors = require('cors');
const { apiRouter } = require("./routes")

//_____INITIALIZATION_____________________________________________

const app = express();
const PORT = process.env.PORT || 5000;

//_____MIDDLEWARES________________________________________________

app.use(express.json());
app.use(cors())

//_____ROUTES_____________________________________________________

app.use('/api', apiRouter)

//_____SERVER PRECONF______________________________________________

const startServer = async () => {
  try {
    await seq.authenticate()
    await seq.sync()
    app.listen(PORT, () => console.log(`APP is running on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

startServer()

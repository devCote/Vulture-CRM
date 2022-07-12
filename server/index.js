const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 7000;

app.use(express.json());
app.use(cors())

app.get('/', (_req, res) => {
  res.status(200).json({ message: "success" })
})

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`)
})

import express from 'express'
import '@controllers/UserController'

const app = express()

app.get('/', (req, res) => {
  return res.json({ msg: 'Hello Typescript' })
})

app.listen(3000)

import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.json({ msg: 'Hello Typescript' })
})

app.listen(3000)

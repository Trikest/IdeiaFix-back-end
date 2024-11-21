const express = require("express")
const app = express()

app.get('/', (resq, res) => {
  res.send('<h1>olá mundo</h1>')
})





app.listen(3001, () => {
    console.log('server está usando a porta 3001')
})
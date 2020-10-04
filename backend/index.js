const express = require('express')
const app = express()
const port = 3000

app.get('/:sequencia', (req, res) => {
console.log(req.params.sequencia)
  res.send('RESULTADO DA LOGICA AQUI')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
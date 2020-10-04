const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000


app.get('/:sequencia', (req, res) => {
console.log(req.params.sequencia)
  res.send('RESULTADO DA LOGICA AQUI')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
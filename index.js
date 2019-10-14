const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 2002;

app.use(bodyParser.json())

const { movieRouter } = require('./routers')

app.use('/movie', movieRouter)


app.listen(port, () => console.log('API aktif di port ' + port))
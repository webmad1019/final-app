require('dotenv').config()

const express = require('express')
const app = express()

require('./configs/mongoose.config')
require('./configs/debugger.config')
require('./configs/middlewares.config')(app)
require('./configs/view-engine.config')(app)
require('./configs/locals.config')(app)

app.use('/', require('./routes/index.routes'))
app.use('/api/coasters', require('./routes/coaster.routes'))

module.exports = app
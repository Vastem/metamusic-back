const mongoose = require('mongoose')

const config = {
    url: 'mongodb://localhost:27017/meta-music',
    options: {
        usenewUrlParser: true,
        useUnifiedTopology: true
    }
}

function conectar() {
    return mongoose.connect(config.url, config.options)
}


function desconectar() {
    return mongoose.disconnect()
}

module.exports = { conectar, desconectar }
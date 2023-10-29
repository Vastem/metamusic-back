const { conectar, desconectar } = require("./config/db");
const SongDAO = require("./data-access/songDAO")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {globalHandlerError, AppError} = require('./utils/appError')
require('dotenv').config({path: './variables.env'})


// const songData = {
//     idsong: 2,
//     name:"Tecateando 2",
//     album:"Softober 2",
//     duration: 120,
//     singers: "Evan Price"
// }

// async function main(){
//     try {
//         const song = new SongDAO();

//         await conectar()
//         await song.create(songData)
//         console.log("Cancion creada")
//         await desconectar()
//     } catch (error) {
//         console.log(error)
//     }
// }

async function main(){
    try {
        await conectar()
        app.use(bodyParser.json())
        app.use(morgan('combined'))

        app.all('*', (req, res, next)=>{
            next(new AppError('Could not access to the specified rout'))
        })

        app.use(globalHandlerError)

        const port = process.env.PORT || 3000

        app.listen(port, ()=>{
        console.log('Servidor corriendo en el puerto ' + port)
        })
    } catch (error) {
        console.log(error)
    }
}


main()
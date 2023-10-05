const { conectar, desconectar } = require("./config/db");
const SongDAO = require("./data-access/songDAO")

const songData = {
    idsong: 2,
    name:"Tecateando 2",
    album:"Softober 2",
    duration: 120,
    singers: "Evan Price"
}

async function main(){
    try {
        const song = new SongDAO();

        await conectar()
        await song.create(songData)
        console.log("Cancion creada")
        await desconectar()
    } catch (error) {
        console.log(error)
    }
}

main()
import { connect, disconnect } from "./config/db.js";
import SongDAO from "./data-access/songDAO.js";

const songData = {
    idsong: 10,
    name:"MONACO",
    album:"ndlqvapm",
    duration: 150,
    singers: "Bad Bunny"
}

async function main(){
    try {
        const song = new SongDAO();
        await connect()
        await song.create(songData)
        console.log("Cancion creada")
        await disconnect()
    } catch (error) {
        console.log(error)
    }
}

main()
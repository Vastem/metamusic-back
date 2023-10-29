import { connect, disconnect } from "./config/db.js";
import AdminDAO from "./data-access/adminDAO.js";
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
        const songs = await song.get()
        console.log("Canciones obtenidas")
        console.log(songs)
        await disconnect()
    } catch (error) {
        console.log(error)
    }
}


async function main2(){
    try {
        const admin = new AdminDAO()
        await connect()
        const adminObtenido = await admin.getID("653d89a48ffec0cf912192ee")
        console.log("Admin si existe")
        console.log(adminObtenido)
        await disconnect()
    } catch (error) {
        console.log(error)
    }
}

main2()
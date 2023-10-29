import SongDAO from "../data-access/songDAO.js";
import ValidationError from "../errors/ValidationError.js";

export default class SongService{
    constructor(){
        this.songDAO = new SongDAO()
    }

    async addSong(songData){
        const songExist = await this.songDAO.getByIdSong(songData.idsong)
        if(songExist) throw new ValidationError("El id de la cancion ya existe en la base de datos.")
        const song = await this.songDAO.add(songData)
        return song
    }

    async updateSong(id, songData){
        const songToUpdate = await this.songDAO.getById(id)
        if(!songToUpdate ) throw new ValidationError("La canción no existe.")
        const songUpdated = await this.songDAO.update(id, songData)
        return songUpdated
    }

    async deleteSong(id){
        const songDeleted = await this.songDAO.delete(id)
        if(!songDeleted) throw new ValidationError("La canción no existe.")
        return songDeleted
    }

    async getSongs(limit){
        const songs = await this.songDAO.get(limit)
        return songs
    }

    async getSong(id){
        const song = await this.songDAO.getById(id)
        if(!song) throw new ValidationError("La canción no existe.")
        return song
    }

    async getSongsByName(name){
        const songs = await this.songDAO.getByName(name)
        return songs
    }

    async getSongsBySingers(singers){
        const songs = await this.songDAO.getBySingers(singers)
        return songs
    }

    async getSongsByAlbum(album){
        const songs = await this.songDAO.getByAlbum(album)
        return songs
    }
}
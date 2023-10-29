import SongService from "../services/songService.js";

export async function addSong(req,res){
    const songService = new SongService()
    try {
        const song = await songService.addSong(req.body)
        res.status(200).json(song)
    } catch (error) {
        res.status(error.statusCode).json({message:error.message})
    }
}

export async function updateSong(req,res){
    const songService = new SongService()
    try {
        const songUpdated = await songService.updateSong(req.params.id, req.body)
        res.status(200).json(songUpdated)
    } catch (error) {
        res.status(error.statusCode).json({message:error.message})
    }
}

export async function deleteSong(req,res){
    const songService = new SongService()
    try {
        const songDeleted = await songService.deleteSong(req.params.id)
        res.status(200).json(songDeleted)
    } catch (error) {
        res.status(error.statusCode).json({message:error.message})
    }
}

export async function getSongs(req,res){
    const songService = new SongService()
    try {
        const songs = await songService.getSongs()
        res.status(200).json(songs)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function getSong(req,res){
    const songService = new SongService()
    try {
        const song = await songService.getSong(req.params.id)
        res.status(200).json(song)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
    
}

export async function getSongByName(req, res){
    const songService = new SongService()
    try {
        const songs = await songService.getSongsByName(req.params.name)
        res.status(200).json(songs)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function getSongBySingers(req, res){
    const songService = new SongService()
    try {
        const songs = await songService.getSongsBySingers(req.params.singers)
        res.status(200).json(songs)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function getSongByAlbum(req, res){
    const songService = new SongService()
    try {
        const songs = await songService.getSongsByAlbum(req.params.album)
        res.status(200).json(songs)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}
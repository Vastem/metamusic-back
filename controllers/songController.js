import SongDAO from "../data-access/songDAO.js";

export async function createSong(req,res){

}

export async function updateSong(req,res){
    
}

export async function deleteSong(req,res){
    
}

export async function getSongs(req,res){
    const songDAO = new SongDAO()
    const songs = await songDAO.get()
    console.log(songs)
    res.status(200).json(songs);
}

export async function getSong(req,res){
    
}
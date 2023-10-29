import {disconnect} from '../config/db.js'

export async function disconectDatabase(req, res, next){
    await disconnect();
    next()
}
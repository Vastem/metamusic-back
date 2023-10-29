import {connect, disconnect} from '../config/db.js'

export async function connectDatabase(req, res, next){
    await connect();
    next()
}
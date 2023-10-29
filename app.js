import express from "express";
import userRouter from "./routes/userRoutes.js";
import songRouter from './routes/songRoutes.js'
import adminRouter from './routes/adminRoutes.js'
import suscriptionRouter from './routes/suscriptionRoutes.js'
import playlistRouter from './routes/playlistRoutes.js'
import { connectDatabase } from "./middlewares/connectDatabase.js"
import { verifyToken } from "./middlewares/jwt.js"


const app = express();
app.use(express.json());

// Inicia la conexion a la base de datos
app.use("/", connectDatabase)

app.use("/user", userRouter)
app.use("/song", verifyToken, songRouter)
app.use("/admin", verifyToken, adminRouter)
app.use("/suscription", verifyToken, suscriptionRouter)
app.use("/playlist", verifyToken, playlistRouter)

app.use((req, res) => {
    res.status(404).send("Not found")
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor express escuchando en el puerto " + PORT)
})
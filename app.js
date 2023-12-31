import express from "express"
import userRouter from "./routes/userRoutes.js"
import songRouter from './routes/songRoutes.js'
import adminRouter from './routes/adminRoutes.js'
import subscriptionRouter from './routes/subscriptionRoutes.js'
import playlistRouter from './routes/playlistRoutes.js'
import { connectDatabase } from "./middlewares/connectDatabase.js"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
// Inicia la conexion a la base de datos
app.use("/", connectDatabase)

app.use("/user", userRouter)
app.use("/song", songRouter)
app.use("/admin", adminRouter)
app.use("/subscription", subscriptionRouter)
app.use("/playlist", playlistRouter)

app.use((req, res) => {
    res.status(404).send({ message: "NOT FOUND" })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor express escuchando en el puerto " + PORT)
})
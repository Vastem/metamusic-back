import express from "express";
import userRouter from "./routes/userRoutes.js";
import songRouter from './routes/songRoutes.js'
import adminRouter from './routes/adminRoutes.js'
import suscriptionRouter from './routes/suscriptionRoutes.js'
import { connectDatabase } from "./middlewares/connectDatabase.js";

const app = express();
app.use(express.json());

// Inicia la conexion a la base de datos
app.use("/", connectDatabase)

app.use("/user", userRouter)
app.use("/song", songRouter)
app.use("/admin", adminRouter)
app.use("/suscription", suscriptionRouter)



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Servidor express escuchando en el puerto " + PORT)
})
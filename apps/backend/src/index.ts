import express from 'express'
import {configDotenv} from 'dotenv';
configDotenv()
 import authRoutes from "./routes/auth.route.js"

const app = express();
app.use(express.json())

const PORT = process.env.PORT as string;


app.use("/api/v1/user/", authRoutes)



app.listen(PORT , () => {
    console.info(`hey! I'm Server`)
})
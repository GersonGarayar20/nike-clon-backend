import express from 'express';
import cors from 'cors';
import { routes } from './routes';

import { connectMongo } from '@/db/mongo';
connectMongo()

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) =>{
  res.send("hola mundo")
})

app.use(routes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

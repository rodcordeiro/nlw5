import express from "express";
import dotenv from 'dotenv';
dotenv.config()

import "./database";
import { routes } from './routes'

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(routes);

app.listen(port,()=>{
    console.log(`Servidor inicializado em http://localhost:${port}`)
});

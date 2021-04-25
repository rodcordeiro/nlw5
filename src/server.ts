import dotenv from 'dotenv';
import { http } from './http';
dotenv.config()

import "./websocket/client";
import "./websocket/admin";

const port = process.env.PORT
http.listen(port,()=>{
    console.log(`Servidor inicializado em http://localhost:${port}`)
});

import express from 'express';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const servidor = http.createServer(app);
app.servidor = servidor.listen(8080, '127.0.0.1', console.log.bind(console, 'Servidor Ativo na porta 8080'));

app.set('appPath', './dev/cliente');
app.use(express.static(app.get('appPath')));

export default app;

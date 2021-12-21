import express from 'express';
import { sendErrors } from './middlewares/sendErrors'; // middleware apara enviar erro
import "express-async-errors"
import { router } from './routes';
import cors from 'cors'
import "reflect-metadata";

import "./database";

const CORS = cors('*')
const app = express()

app.use(CORS)
app.use(express.json());
app.use(router);

app.use(sendErrors)

app.listen(3000, () => {
  console.log('Servidor rodanado em:')
  console.log('\x1b[32m', 'http://localhost:3000');
  console.log('\x1b[0m');
})


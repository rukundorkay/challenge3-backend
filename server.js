import express from 'express';
import Router from './routes/index.js';
const app = express();
app.use("/", Router);
const port = process.env.port || 5000;
app.listen(port, console.log(`server is runnning on server of ${port}`))
import express from 'express';
import Router from './routes/index.js';
const app = express();
app.use("/", Router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server is runnning on server of ${PORT}`))
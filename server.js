import express from 'express';
import Router from './routes/index.js';
const app = express();
// app.use(express.static(__dirname))
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*')
    next()
})
app.use("/", Router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server is runnning on server of ${PORT}`))
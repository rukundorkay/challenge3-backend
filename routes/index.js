import express from 'express';
import checkAlbumAvailabity from '../middleware/checkalbum.js';
const Router = express();
Router.get('/', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    res.end(`<h1>WELCOME TO Challenge3 API</h1>\n Enjoy using our API for challenge 3\n  to click <a href="https://vast-eyrie-17161.herokuapp.com">here </a>  to explore challeng3  `);
});

Router.get('/album/:id', checkAlbumAvailabity);

export default Router;
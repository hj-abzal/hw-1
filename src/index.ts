import express, {Request, Response} from 'express';
import {videosRouters} from './routers/videos-routers';

const app = express();
const PORT = 3000;


const parserMiddleware = express.json();
app.use(parserMiddleware);


app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!')
})

// app.use('/api/videos', videosRouters)


app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
})
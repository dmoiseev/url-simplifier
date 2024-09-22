import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import urlRouter from './routes/url';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/', urlRouter);

export async function run() {
    await mongoose.connect('mongodb://localhost:27017');

    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    });
}

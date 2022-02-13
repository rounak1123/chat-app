import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import route from './routes/Route.js'

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',route);

const PORT = process.env.PORT;
const username = process.env.MONGO_USER_NAME;
const password = process.env.MONGO_PASSWORD;


Connection(username,password);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`);
})

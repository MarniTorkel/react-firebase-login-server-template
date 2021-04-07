import express from 'express';
import bodyParser from 'body-parser';
import * as admin from "firebase-admin";
import credentials from "./credentials.json";
import { db } from './db';
import { routes, protectRouteMiddleware } from './routes';

admin.initializeApp({
    credentials: admin.credential.cert(credentials),
});

const app = express();

app.use(express.static(__dirname + "/uploads/"));

app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, protectRouteMiddleware, route.handler);
});

const start = async () => {
    try {
        await db.connect('mongodb://localhost:27017');
        await app.listen(8088);
        console.log("Listening on port 8088");
    } catch (error) {
        console.error(error);
    }
    
}

start();
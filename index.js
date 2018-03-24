import * as functions from 'firebase-functions';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from './src/App';
import express from 'express';

const app = express();
const staticContext = {};
app.get('**', (req, res) => {
    const html = renderToString(<StaticRouter context={staticContext}><App/></StaticRouter>);

    //res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Seaside Horses</title>
                <link rel="stylesheet" type="text/css" href="/css/index.css">
                <link rel="stylesheet" type="text/css" href="/css/w3.css">
            </head>
            <body>
                <div id="root">${html}</div>
                <script type="text/javascript" src="bundle.js"></script>
                </body>
        </html>
    `);


});

export let ssrapp = functions.https.onRequest(app);
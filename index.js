import * as functions from 'firebase-functions';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from './src/App';
import express from 'express';
//import fs from 'fs';

//const index = fs.readFileSync(__dirname + '/index.html', 'utf-8');

const app = express();
const staticContext = {};
app.get('**', (req, res) => {
    const content = renderToString(<StaticRouter context={staticContext} location={req.url}><App/></StaticRouter>);
    //const html = index.replace('<!-- ::APP:: -->', content);
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
<div id="root">${content}</div>
<script type="text/javascript" src="/bundle.js"></script>
</body>
</html>
`);
});

export let ssrapp = functions.https.onRequest(app);
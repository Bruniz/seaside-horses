import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './src/App';
import express from 'express';
import fetch from 'isomorphic-fetch';

//const index = fs.readFileSync(__dirname + '/index.html', 'utf-8');

const app = express();
const staticContext = {};
const languages = ['se', 'fi', 'en'];
app.get('**', (req, res) => {
  const urlSplit = req.url.split("/");
  let currentLanguage = 'se';
  let currentPage = 'frontpage';
  let user = null;

  if (languages.includes(urlSplit[1])) {
    currentLanguage = urlSplit[1];
  }

  fetch(`https://seaside-horses.firebaseio.com/frontpage/${currentLanguage}.json`)
    .then(response => { return response.json(); })
    .then(pageContents => {
      console.log(`page contents: ${pageContents}`);
      const content = renderToString(
        <StaticRouter context={staticContext} location={req.url}>
          <App state={{
            content: pageContents,
            currentLanguage: currentLanguage,
            currentPage: currentPage,
            user: user,
            languages: languages
          }}
          />
        </StaticRouter>)
        ;
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
  //const html = index.replace('<!-- ::APP:: -->', content);
  //res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');

});

export let ssrapp = functions.region('europe-west1').https.onRequest(app);
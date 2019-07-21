'use strict';

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');
const actions = require('./actions');
const handlers = require('./handlers');

exports.crazyTalker = functions.https.onRequest((request, response) => {
  const app = new App({request, response});
  // console.log('Request headers: ' + JSON.stringify(request.headers));
  // console.log('Request body: ' + JSON.stringify(request.body));

  let actionMap = new Map();
  actionMap.set(actions.NAME_ACTION, handlers.makeName);
  actionMap.set(actions.EXPLORE_CAREER_ACTION, handlers.exploreCareers);
  actionMap.set(actions.BITCOIN_PRICE_ACTION, handlers.bitcoinPrice);
  actionMap.set(actions.BITCOIN_CONVERT_PRICE_ACTION, handlers.bitcoinConvertPrice);

app.handleRequest(actionMap);
});

require("isomorphic-fetch");
require("isomorphic-form-data");
const fs = require('fs');
const express = require("express");
const app = express();
const { UserSession } = require("@esri/arcgis-rest-auth");
const { clientId } = require("./config.json");

// Note, this uses rcgis-rest-js: https://esri.github.io/arcgis-rest-js/
// arcgis-rest-js has really nice wrappers for handling the OAuth workflows
// you can read the source code here: https://github.com/Esri/arcgis-rest-js/blob/master/packages/arcgis-rest-auth/src/UserSession.ts

// file path to where the user data is stored
const FP = './data/data.json';
 
// configuration to initiate the oauth process
const credentials = {
  clientId,
  redirectUri: "http://localhost:3000/authenticate",
  refreshTokenTTL: 2147483647,
  duration: 2
};

// store a given session to the json file
function serializeInfo(session){
  let data;
  try{
    data = require(FP);
  } catch(e){
    data = {};
  }
  data[session.username] = session.serialize();
  sD = JSON.stringify(data, null, 2);

  return new Promise( (res, rej) => {
    fs.writeFile(FP, sD, err => {
      if(err) rej(err);
      res('Stored!');
    });
  });
}

// OAuth autorize endpoint
app.get("/authorize", function(req, res) {
  UserSession.authorize(credentials, res);
});

// OAuth callback handler
// Send back to landing page once complete
app.get("/authenticate", function(req, res) {
  UserSession.exchangeAuthorizationCode(
    credentials,
    req.query.code
  ).then(serializeInfo)
  .then(_ => res.redirect('/'))
  .catch(err => res.send(err));
});

// "Partner auth" endpoint that returns a given user session based on an input username
// In the real-world, this should be part of another authentication process
// that verifies the user and returns the appropriate session information

// Note, this constructs a new session because UserSession has convenient methods for
// updating the token if needed, and translating to the JSON object the JS API expects
// this can be easily ported
app.get("/partnerauth", function(req, res) {
  const un = req.query.username;
  let data = require(FP);
  
  let session = UserSession.deserialize(data[un]);
  
  if(session.tokenExpires.getTime() > Date.now()){
    res.json(session.toCredential());
  } else {
    session.refreshSession()
    .then(session => {
      serializeInfo(session);
      res.json(session.toCredential());
    });
}
})

app.use(express.static('public'));

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
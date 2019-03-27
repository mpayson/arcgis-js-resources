# oauth

> End-to-end, server-based, user-based, POC OAuth 2.0 workflow with ArcGIS ([more](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/))

## Files

* [`server.js`](/oauth/server.js) - Authentiction server built using [Express](https://expressjs.com/) & [arcgis-rest-js](https://github.com/esri/arcgis-rest-js). Handles [server-based oauth](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/server-based-user-logins/) and stores the tokens in a simple `json` file
* [`public/admin.html`](/oauth/public/admin.html) - Sign-in button to kick off the authentication process
* [`public/map.html`](/oauth/public/map.html) - Oversimplified "log-in" form and map. Log in is used to fetch the appropriate token for the user then load a secured map
* [`public/index.html`](/oauth/public/index.html) - Quick landing page
* [`public/styles.css`](/oauth/public/styles.css) - A few common styles

## Get started

1. `$ git clone https://github.com/mpayson/arcgis-js-res.git`
2. `$ cd arcgis-js-res/oauth`
3. `$ npm install`
4. `$ mkdir data`
5. `$ npm start`
6. visit [http://localhost:3000/](http://localhost:3000/)

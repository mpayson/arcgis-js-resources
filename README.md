# ArcGIS JS Res

> Quick [ArcGIS JavaScript](https://developers.arcgis.com/javascript/) resources from conversations and personal tinkering

## Workflows

#### `OAuth 2.0` [code](/oauth)

> End-to-end, [server-based](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/server-based-user-logins/), [user-based](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/signing-in-arcgis-online-users/), oversimplified, OAuth 2.0 workflow. Shows: authenticating a named user, maintaining tokens & refresh tokens, and forwarding to the [ArcGIS JS API](https://developers.arcgis.com/javascript/) when needed.

> Note, this isn't ready for production--the tokens should be secured, associated with a legitimate identity system not a `json` file, etc

## User Interactions

#### `selectaoi` [code](/selectaoi.html) | [live](https://mpayson.github.io/arcgis-js-res/selectaoi.html)

> Select an area of interest based on GIS data. Demonstrates: sign in, drawing, drawing validation, pop-up actions, geocoding, input web maps and feature layers, and some _really_ cool imagery

#### `animate` [code](/animate.html) | [live](https://mpayson.github.io/arcgis-js-res/animate.html)

> Animate a point (eg [graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html))!

## Vector Data

#### `exploreGeoJson` [code](/exploreGeoJson.html) | [live](https://mpayson.github.io/arcgis-js-res/exploreGeoJson.html)

> Display ~50k GeoJson building footprints and dynamically style / perform geospatial queries _on the client_. The GeoJson is converted to ArcGIS Json with [Terraformer](http://terraformer.io/arcgis-parser/) on load and the data is cut from Microsoft's open [building footprints](https://github.com/Microsoft/USBuildingFootprints)

#### `pipebins` [code](/pipebins.html) | [live](https://mpayson.github.io/arcgis-js-res/pipebins.html)

> Display 150k+ line features by displaying [pre-computed bins](https://doc.arcgis.com/en/arcgis-online/analyze/summarize-within.htm) that fade to the underlying feature layer as you zoom in. Once the feature layer is visible, you can select an area of interest to highlight features / query capacity statistics _on the client_

#### `pipetiles` [code](/pipetiles.html) | [live](https://mpayson.github.io/arcgis-js-res/pipetiles.html)

> Same as `pipebins`, but with a [hosted tile layer](https://doc.arcgis.com/en/arcgis-online/manage-data/publish-tiles-from-features.htm) instead of a bin feature layer. To mix it up, you can also select an area of interest at any scale to query capacity / features _on the server_

## Issues and Contributing

Want to request a new sample? Have a question? Would [__love__](https://github.com/mpayson/arcgis-js-res/issues) to hear from you.

And PRs always welcome!
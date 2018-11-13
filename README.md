# ArcGIS JS Res

> Quick [ArcGIS JavaScript](https://developers.arcgis.com/javascript/) resources from conversations and personal tinkering

## Display lots of features

#### `pipebins` [code](/pipebins.html) | [live](https://mpayson.github.io/arcgis-js-res/pipebins.html)

> Display 150k+ line features by displaying [pre-computed bins](https://doc.arcgis.com/en/arcgis-online/analyze/summarize-within.htm) that fade to the underlying feature layer as you zoom in. Once the feature layer is visible, you can select an area of interest to highlight features / query capacity statistics _on the client_

#### `pipetiles` [code](/pipetiles.html) | [live](https://mpayson.github.io/arcgis-js-res/pipetiles.html)

> Same as `pipebins`, but with a [hosted tile layer](https://doc.arcgis.com/en/arcgis-online/manage-data/publish-tiles-from-features.htm) instead of a bin feature layer. To mix it up, you can also select an area of interest at any scale to query capacity / features _on the server_

## User interactions

#### `selectaoi` [code](/selectaoi.html) | [live](https://mpayson.github.io/arcgis-js-res/selectaoi.html)
> Select an area of interest based on GIS data. Demonstrates: sign in, drawing, drawing validation, pop-up actions, geocoding, input web maps and feature layers, and some _really_ cool imagery
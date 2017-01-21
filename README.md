# graphql.fi
GraphQL-server for Finnish open data WIP
GraphiQL: http://api.graphql.fi/graphiql

## Available APIs:
### Digitraffic (WIP)
- Camera data with meta data (location etc)
  - example [query] (http://api.graphql.fi/graphiql?query=query%20example%20%7B%0A%20%20digitraffic%20%7B%0A%20%20%20%20cameraData%20%7B%0A%20%20%20%20%20%20cameraStations%20%7B%0A%20%20%20%20%20%20%20%20cameraPresets%20%7B%0A%20%20%20%20%20%20%20%20%20%20imageUrl%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20metaData%20%7B%0A%20%20%20%20%20%20%20%20%20%20geometry%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%20%20%20%20coordinates%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=example)
- Fluency data with meta data (wip)


License: Liikennevirasto / tie.digitraffic.fi, lisenssi CC 4.0 BY

import express from "express";
import bodyParser from "body-parser";
import {
  graphqlExpress,
  graphiqlExpress,
} from "graphql-server-express";
import schema from "./schemas";
import { cameraData } from "./schemas/digitraffic/models";
import digitrafficConnector from "./schemas/digitraffic/connector";

const PORT = 3000;

const app = express();

app.use("/graphql", bodyParser.json(), graphqlExpress(() => {
  return {
    schema,
    context: {
      digitraffic: {
        camera: cameraData(digitrafficConnector),
      },
    },

  };
}));

app.use("/graphiql", graphiqlExpress({
  endpointURL: "/graphql",
}));

app.listen(PORT);

import "babel-polyfill";
import express from "express";
import bodyParser from "body-parser";
import {
  graphqlExpress,
  graphiqlExpress,
} from "graphql-server-express";
import cors from "cors";
import schema from "./schemas";
import { cameraModel, fluencyModel } from "./schemas/digitraffic/models";
import digitrafficConnector from "./schemas/digitraffic/connector";

const PORT = process.env.PORT || 3000;
const app = express();


app.use("/graphql", cors(), bodyParser.json(), graphqlExpress(() => {
  return {
    schema,
    context: {
      digitraffic: {
        camera: cameraModel(digitrafficConnector),
        fluency: fluencyModel(digitrafficConnector),
      },
    },

  };
}));

app.use("/graphiql", graphiqlExpress({
  endpointURL: "/graphql",
}));

app.listen(PORT, () => {
  console.log("Server started, listening port ", PORT); // eslint-disable-line no-console
});

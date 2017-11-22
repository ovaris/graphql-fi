import { merge } from "lodash/object";
import { makeExecutableSchema } from "graphql-tools";
import {
  schema as Digitraffic,
  resolvers as digitrafficResolvers,
} from "./digitraffic/schema";
import {
  schema as HSLParkAndRide,
  resolvers as hslResolvers,
} from "./hsl/schema";

const RootQuery = `
  type RootQuery {
    digitraffic: Digitraffic
    hslParkAndRide: HSLParkAndRide
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

const rootResolvers = {
  RootQuery: {
    digitraffic() {
      return Digitraffic;
    },
    hslParkAndRide() {
      return HSLParkAndRide;
    },
  },
};

const resolvers = merge(rootResolvers, digitrafficResolvers, hslResolvers);

export default makeExecutableSchema({
  allowUndefinedInResolve: process.env.NODE_ENV === "production",
  typeDefs: [SchemaDefinition, RootQuery, Digitraffic, HSLParkAndRide],
  resolvers,
});

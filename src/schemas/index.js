import { merge } from "lodash/object";
import { makeExecutableSchema } from "graphql-tools";
import {
  schema as Digitraffic,
  resolvers as digitrafficResolvers,
} from "./digitraffic/schema";

const RootQuery = `
  type RootQuery {
    digitraffic: Digitraffic
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
  },
};

const resolvers = merge(rootResolvers, digitrafficResolvers);

export default makeExecutableSchema({
  allowUndefinedInResolve: process.env.NODE_ENV === "production",
  typeDefs: [SchemaDefinition, RootQuery, Digitraffic],
  resolvers,
});

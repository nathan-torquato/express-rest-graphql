import { Express } from "express";
import { ApolloServer, gql } from "apollo-server-express";

export const buildGraphQLServer = async (app: Express) => {
  const server = new ApolloServer({
    typeDefs: gql`
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => "Hello GraphQL",
      },
    },
  });

  await server.start();

  server.applyMiddleware({ app });
};

import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello REST");
});

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

server.start().then(() => {
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});

import express from 'express';
import { appRouter } from './app.router';
import { buildGraphQLServer } from './graphql.server';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', appRouter);

const main = async () => {
  try {
    await buildGraphQLServer(app);
    app.listen(port, () => {
      console.log(`This is the Example app listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();

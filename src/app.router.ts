import { Router } from 'express';

export const appRouter = Router();

appRouter.get('/', (_, res) => {
  res.send('Hello REST');
});

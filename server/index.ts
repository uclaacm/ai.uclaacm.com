import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/users'
import * as ddb from './dynamo/wrappers'

dotenv.config();

var app: Express = express();
const port = process.env.PORT;

// health GET
app.get('/health', (req: Request, res: Response) => {
  res.send('Express + TypeScript server running!');
});

// asks the server to import routes from routes/users
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
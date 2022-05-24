import express from 'express';
import { loadControllers } from 'awilix-express';
import loadContainer from './container';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

loadContainer(app);

app.use(loadControllers(
  'moocs/*/Infrastructure/Controller/*.ts',
  { cwd: __dirname }
));

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

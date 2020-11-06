import { mongoURI } from './config/keys';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import todos from './routes/todos';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));

app.use('/api/todos', todos);

app.listen(port, () => {
  console.log('Started on port ' + port);
});

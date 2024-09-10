import express from 'express';
import cors from 'cors';
import routes from './routes';
import cookieParser from 'cookie-parser'

const app = express();
app.use(cors());
app.use(cookieParser());
app.use('/api', routes);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

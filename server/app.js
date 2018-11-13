
import express from 'express';
import bodyParser from 'body-parser';
import route from './routes/parcel';

// set-up for express
const app = express();

// parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// for incoming routes
app.use('/api/v1', route);

const PORT = 3500;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
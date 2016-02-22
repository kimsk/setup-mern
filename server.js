import express from 'express';
import { MongoClient } from 'mongodb';

let app = express();

app.use(express.static('public'));

(async () => {
  let db = await MongoClient.connect(process.env.MONGO_URL);
  
  app.listen(3000, () => console.log('Listening on port 3000 - async'));
})();

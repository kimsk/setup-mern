import express from 'express';
import { MongoClient } from 'mongodb';

let app = express();
const port = 3000

app.use(express.static('public'));

(async () => {
  let db = await MongoClient.connect(process.env.MONGO_URL);

  app.listen(port, () => console.log(`Listening on port ${port}`));
})();

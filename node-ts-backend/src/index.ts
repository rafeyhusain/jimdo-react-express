import express, { Request, Response } from 'express';
import { getPlaces } from './services/PlacesService';

import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors())

app.get('/', async (req: Request, res: Response) => {
  res.send("Places API 1.0");
});

app.get('/places/:searchText/:latitude/:longitude', async (req: Request, res: Response) => {
  try {
    let result = await getPlaces(req.params.searchText
      , parseFloat(req.params.latitude)
      , parseFloat(req.params.longitude));

    return res.status(result.error === undefined ? 200 : 500).json({
      places: result
    });
  } catch (error) {
    console.error(`error`, error);
  }
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});


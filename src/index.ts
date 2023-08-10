//importing Express
import express from 'express';
import path from 'path';
import * as fs from 'node:fs/promises';


//Starting up an instance of app and setting a port
const app = express();
const port = 3000;


//Starting the server on the port
app.listen(port, () => {
  console.log(`server running on http://localhost:${port} `);
});


app.get('/image/:name', async (req: express.Request, res: express.Response): Promise<void> => {

});

export default app;


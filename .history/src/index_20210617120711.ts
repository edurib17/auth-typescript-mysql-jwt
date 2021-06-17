import express from 'express';

import routes from './routes';

const app = express();

app.use(routes);
app.use(express.json());


app.listen(3000, () => console.log('\u{1F525} Sever started at http://localhost:3000'));


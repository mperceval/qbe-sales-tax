import express from 'express';
import cors from 'cors';

import { 
    getProductsController,
    calcSalesTaxController,
} from './controllers/index.js'

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => console.log(`Listening on port ${port}`));

// Routes
app.get('/products', getProductsController);
app.post('/calc-sales-tax', calcSalesTaxController);
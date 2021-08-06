import { getProducts, getProductById } from '../models/products.js';
import { calculateTaxPayableForProduct } from '../services/calc-tax.js'

const roundUp = num => (Math.ceil(num * 20) / 20).toFixed(2);
const calculateTotal = (preTaxPrice, tax) => (Number(preTaxPrice) + Number(tax)).toFixed(2);

export const getProductsController = (req, res) => res.json(getProducts());

export const calcSalesTaxController = (req, res) => {
    const { products } = req.body;

    const productsWithTax = products.map(id => {
        const product = getProductById(id);
        if (!product) return;
        const tax = roundUp(calculateTaxPayableForProduct(product));
        const total = calculateTotal(product.preTaxPrice, tax);

        return {
            ...product,
            tax,
            total,
        };
    });

    res.json(productsWithTax);
}

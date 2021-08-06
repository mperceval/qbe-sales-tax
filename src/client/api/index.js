import { transformProducts } from './utils';

export const getProducts = async () => {
    try {
        const response = await fetch('http://localhost:3001/products/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        const products = await response.json();
        return transformProducts(products);
    }
    catch(e) {
        console.log(e);
        // TODO: error handling
    }
}

export const calculateTaxForProducts = async (productIds) => {
    try {
        const response = await fetch('http://localhost:3001/calc-sales-tax/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ products: productIds }),
        });

        return await response.json();
    }
    catch (e) {
        console.log(e);
        // TODO: error handling
    }
}
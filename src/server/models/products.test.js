import { getProducts, getProductById } from './products.js';

const productStructure = {
    id: expect.any(Number),
    description: expect.any(String),
    preTaxPrice: expect.any(String),
    info: expect.objectContaining({
        book: expect.any(Boolean),
        food: expect.any(Boolean),
        medicine: expect.any(Boolean),
        imported: expect.any(Boolean),
    }),
};

describe('products', () => {
    describe('getProducts', () => {
        it('should return an array of products', () => {
            const products = getProducts();
            expect(products).toBeInstanceOf(Array);
        });

        it('should contain products with the correct structure', () => {
            getProducts().forEach(product => expect(product).toEqual(expect.objectContaining(productStructure)));
        });
    });

    describe('getProductById', () => {
        it('should return null if no product found', () => {
            expect(getProductById(453)).toBeNull;
        });

        it('should return correct product for given id', () => {
            const expectedProduct = {
                id: 3,
                description:'Phil Collins greatest hits CD',
                preTaxPrice: '14.99',
                info:{
                    book: false,
                    food: false,
                    medicine: false,
                    imported: false 
                } 
            };
            expect(getProductById(3)).toEqual(expectedProduct);
        });
    })
});
import { transformProducts } from './utils.js';

const testProducts = [
    { id : 1, description: 'Mars Bar', preTaxPrice: '0.85', info: { book: false, food: true, medicine: false, imported: false } },
    { id : 2, description: 'Perfume - Eau De Waffle (Imported)', preTaxPrice: '47.50', info: { book: false, food: false, medicine: false, imported: true } },
];

const expectedProducts = [
    { id : 1, description: 'Mars Bar', preTaxPrice: '0.85' },
    { id : 2, description: 'Perfume - Eau De Waffle (Imported)', preTaxPrice: '47.50' },
];

describe('transformProducts', () => {
    it('should transform array of products correctly', () => {
        expect(transformProducts(testProducts)).toEqual(expectedProducts);
    })
});
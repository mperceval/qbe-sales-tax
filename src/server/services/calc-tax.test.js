import { calculateTaxPayableForProduct } from './calc-tax.js';

describe('calculateTaxPayableForProduct', () => {
    it('should return 0 if no product specified', () => {
        expect(calculateTaxPayableForProduct()).toBe(0);
    });

    it('should return no tax for domestic book', () => {
        const product = { 
            id: 1,
            description: 'Domestic book',
            preTaxPrice: '14.99',
            info: {
                book: true,
                food: false,
                medicine: false,
                imported: false, 
            } 
        };

        expect(calculateTaxPayableForProduct(product)).toBe(0);
    });

    it('should return correct tax for imported book', () => {
        const product = { 
            id: 1,
            description: 'Imported book',
            preTaxPrice: '14.99',
            info: {
                book: true,
                food: false,
                medicine: false,
                imported: true,
            } 
        };

        expect(calculateTaxPayableForProduct(product)).toBe(0.7495);
    });

    it('should return no tax for domestic food', () => {
        const product = { 
            id: 1,
            description: 'Domestic food',
            preTaxPrice: '14.99',
            info: {
                book: false,
                food: true,
                medicine: false,
                imported: false, 
            } 
        };

        expect(calculateTaxPayableForProduct(product)).toBe(0);
    });

    it('should return correct tax for imported food', () => {
        const product = { 
            id: 1,
            description: 'Imported food',
            preTaxPrice: '14.99',
            info: {
                book: false,
                food: true,
                medicine: false,
                imported: true,
            } 
        };

        expect(calculateTaxPayableForProduct(product)).toBe(0.7495);
    });

    it('should return no tax for domestic medicine', () => {
        const product = { 
            id: 1,
            description: 'Domestic medicine',
            preTaxPrice: '14.99',
            info: {
                book: false,
                food: false,
                medicine: true,
                imported: false, 
            } 
        };

        expect(calculateTaxPayableForProduct(product)).toBe(0);
    });

    it('should return correct tax for imported medicine', () => {
        const product = { 
            id: 1,
            description: 'Imported medicine',
            preTaxPrice: '14.99',
            info: {
                book: false,
                food: false,
                medicine: true,
                imported: true,
            } 
        };

        expect(calculateTaxPayableForProduct(product)).toBe(0.7495);
    });

    it('should return correct tax for domestic non-exempt item', () => {
        const product = { 
            id: 1,
            description: 'Domestic some other item',
            preTaxPrice: '14.99',
            info: {
                book: false,
                food: false,
                medicine: false,
                imported: false,
            } 
        };

        expect(calculateTaxPayableForProduct(product)).toBe(1.499);
    });

    it('should return correct tax for imported non-exempt item', () => {
        const product = { 
            id: 1,
            description: 'Imported some other item',
            preTaxPrice: '14.99',
            info: {
                book: false,
                food: false,
                medicine: false,
                imported: true,
            } 
        };

        expect(calculateTaxPayableForProduct(product)).toBe(2.2485);
    });


});
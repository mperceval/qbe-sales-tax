const products = [
    { id : 1, description: 'Mars Bar', preTaxPrice: '0.85', info: { book: false, food: true, medicine: false, imported: false } },
    { id : 2, description: 'Perfume - Eau De Collins (Imported)', preTaxPrice: '47.50', info: { book: false, food: false, medicine: false, imported: true } },
    { id : 3, description: 'Phil Collins greatest hits CD', preTaxPrice: '14.99', info: { book: false, food: false, medicine: false, imported: false } },
    { id : 4, description: 'Phil Collins - Not Dead Yet - Book', preTaxPrice: '12.49', info: { book: true, food: false, medicine: false, imported: false } },
    { id : 5, description: 'Ferrero Roche (Imported)', preTaxPrice: '10.00', info: { book: false, food: true, medicine: false, imported: true } },
];

export const getProducts = () => products;

export const getProductById = (id) => getProducts().find(product => product.id === id);


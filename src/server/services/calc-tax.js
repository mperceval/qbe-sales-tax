
const isMedicine = ({ info }) => info.medicine;
const isBook = ({ info }) => info.book;
const isFood = ({ info }) => info.food;
const isImported = ({ info }) => info.imported;
const calculateTax = (rate, preTaxPrice) => (rate * Number(preTaxPrice)) / 100;

export const calculateTaxPayableForProduct = (product) => {
    
    if (!product) return 0;

    const { info, preTaxPrice } = product;
    let salesTax = 0;
    let importTax = 0;
   
    if (!isBook(product) && !isFood(product) && !isMedicine(product)) {
        salesTax = calculateTax(10, preTaxPrice);
    }

    if (isImported(product)) {
        importTax = calculateTax(5, preTaxPrice);
    }

    return salesTax + importTax;
}

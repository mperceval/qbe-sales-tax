
const selectProductDetails = ({ id, description, preTaxPrice }) => ({ id, description, preTaxPrice});

export const transformProducts = (products) => products.map(selectProductDetails); 
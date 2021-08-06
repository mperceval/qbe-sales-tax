import PropTypes from 'prop-types';

import './shopping-basket.css';

function ShoppingBasket({ products }) {
    
    const renderProducts = () => {
        return products.map((product, idx) => {
            const { description, preTaxPrice, tax, total } = product;
            return (
                <div key={`product-${idx}`} className="flex-table row" role="rowgroup">
                    <div className="flex-row first" role="cell">{description}</div>
                    <div className="flex-row" role="cell">£{preTaxPrice}</div>
                    <div className="flex-row" role="cell">£{tax || '0.00'}</div>
                    <div className="flex-row" role="cell">£{total || '0.00'}</div>
                </div>
            );
        });
    }

    return (
        <div className="shopping-basket">
            <div className="table-container" role="table" aria-label="Destinations">
                <div className="flex-table header" role="rowgroup">
                    <div className="flex-row first" role="columnheader">Description</div>
                    <div className="flex-row" role="columnheader">Price</div>
                    <div className="flex-row" role="columnheader">Tax</div>
                    <div className="flex-row" role="columnheader">Total</div>
                </div>
                {renderProducts()}
            </div>
        </div>
    );
};

ShoppingBasket.propTypes = {
    products: PropTypes.array.isRequired, // Lazy of me - should define what a product looks like
};

export default ShoppingBasket;

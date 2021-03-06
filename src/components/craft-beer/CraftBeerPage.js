import React from 'react';
import ProductsListing from '../common/ProductsListing';
import data from '../../data/craftbeer.json';

class CraftBeerPage extends React.Component {
    render() {
        return( 
            <div className="main-content py-3">
                <ProductsListing products={data.products} />
            </div>
            
        );
    }
    
    componentDidMount() {
        window.scrollTo(0, 0)
    }
}

export default CraftBeerPage;
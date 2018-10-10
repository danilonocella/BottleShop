import React from 'react';
import ProductsListing from '../common/ProductsListing';
import data from '../../data/beer.json';

class BeerPage extends React.Component {
    render() {
        return( 
            <div className="main-content py-3">
                <ProductsListing products={data.products} className="container" />
            </div>
            
        );
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}

export default BeerPage;
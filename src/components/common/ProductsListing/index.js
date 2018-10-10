import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';

function ProductListing(props) {
    return <div className="row product-listing">
    {
        props.products.map( product =>
            <ProductListItem 
                className="col-md-4 col-sm-12"
                product={product} 
                key= {product.id}
                addToCart= {props.addToCart}
                removeFromCart={props.removeFromCart}
                cartItem= {props.cart.filter(cartItem => cartItem.id === product.id)[0]}
            />)
    }
    </div>
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
import React from 'react';
import Cart from './Cart';

import { connect } from 'react-redux'

class CartPage extends React.Component{
    render() {
        return(
            <div className="main-content py-5">      
                { (this.props.cart.length > 0) ? <Cart /> : <div style={{textAlign:'center', fontSize:'26px'}}><p>There are currently no items in your shopping cart.</p> </div>}
            </div>
        )
    }
    
    componentDidMount() {
        window.scrollTo(0, 0)
    }
}

function mapStateToProps(state){
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(CartPage)

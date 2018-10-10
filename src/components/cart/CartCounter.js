import React from 'react';
import { connect } from 'react-redux'


function total(items) {
    let total = 0;
    
    items.forEach(item => {
        total = total + (item.price * item.quantity);
    });

    return total.toFixed(2)
}


function CartCounter(props) {
    return <div className="badge badge-pill badge-secondary cart-pill">

    <span>$ {total(props.cart)} </span>
    

    </div>
}


function mapStateToProps(state){
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(CartCounter)
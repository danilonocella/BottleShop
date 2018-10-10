import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

function sort(items) {

    return items.sort((a, b) => a.id < b.id)
}

function total(items) {
    let total = 0;
    
    items.forEach(item => {
        total = total + (item.price * item.quantity);
    });

    return total.toFixed(2)
}

function Cart(props) {
    return <div>

        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>ITEM</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                sort(props.cart).map( item => <tr>
                    <td>
                        <img 
                            height={200}
                            title={ item.brand }
                            src={ '/img/' + item.image }
                            alt={ item.brand }
                        />
                    </td>
                    <td>{ item.brand }</td>
                    <td>{ item.quantity }</td>
                    <td>{ item.price }</td>
                    <td>
                        <button
                            type="button" 
                            class="btn btn-success action-button"
                            onClick={() => props.addToCart(item)}
                        >
                            <FaPlus />
                        </button>
                        <button
                            type="button" 
                            class="btn btn-danger action-button"
                            onClick={() => props.removeFromCart(item)}                            
                        >
                            <FaMinus />
                        </button>
                        <button
                            className="btn btn-secondary action-button" 
                            title="Remove all from cart"
                            onClick={() => props.removeAllFromCart(item)}
                        >
                            
                            <FaTrash />
                        </button>
                    </td>

                </tr>
                )
                }
                <tr style={{borderBottom: 'none'}}>
                    <td ></td>
                    <td></td>
                    <td colspan="2" style={{fontSize: '20px'}}>ORDER TOTAL: ${total(props.cart)}</td>
                    <td>
                    <NavLink to='/checkout'>
                        <button className="btn btn-primary btn-lg " >Checkout</button>
                    </NavLink>
                        
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
}

//Gives access to state (in this case, state.cart)
function mapStateToProps(state){
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';


const $ = window.$;

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

class Cart extends React.Component{
    render(){
        return(
            <div>

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
                        sort(this.props.cart).map( item => <tr>
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
                                    data-toggle="tooltip" data-placement="top" title="Add item (x1) to cart"
                                    onClick={() => this.props.addToCart(item)}
                                >
                                    <FaPlus />
                                </button>
                                <button
                                    type="button" 
                                    class="btn btn-danger action-button"
                                    data-toggle="tooltip" data-placement="top" title="Remove item (x1) from cart"
                                    onClick={() => this.props.removeFromCart(item)}                            
                                >
                                    <FaMinus />
                                </button>
                                <button
                                    type="button" 
                                    id='remove-all-button'
                                    className="btn btn-secondary action-button" 
                                    data-toggle="tooltip" data-placement="top" title="Remove completely from cart"
                                    onClick={() => this.props.removeAllFromCart(item)}
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
                            <td colspan="2" style={{fontSize: '20px'}}>ORDER TOTAL: ${total(this.props.cart)}</td>
                            <td>
                            <NavLink to='/checkout'>
                                <button className="btn btn-primary btn-lg " >Checkout</button>
                            </NavLink>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip({
            trigger : 'hover'
        });
        $( "#remove-all-button" ).click(function() {
         $('.tooltip').remove();
       });
    }
      
    componentDidUpdate() {
       $( "#remove-all-button" ).click(function() {
        $('.tooltip').remove();
      });
    }
}

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
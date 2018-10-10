import React from 'react';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

export default function ProductListItem(props) {
    return <div className="list-item">

        <div className="col-left">
            <h5>{ props.product.brand }</h5>
            <div>{ props.product.size }</div>
            <div>${ props.product.price }</div>
            <div>Qty: { (props.cartItem && props.cartItem.quantity) || 0 } </div>
            <div className="item-buttons">
                <AddButton 
                    //What props shouls be passed? if we check 'AddButton.js', the components uses props.addToCart , props.product and props.cartItem 
                    addToCart={props.addToCart}
                    product={props.product}
                    cartItem={props.cartItem}
                    style={{margin: '2px;'}}
                />
                {

                    <RemoveButton 
                        removeFromCart={props.removeFromCart}
                        product={props.product}
                        cartItem={props.cartItem}
                        style={{margin: '0 2px'}}
                    />
                }
            </div>
        </div>

        <div className="col-right">
            <img 
                height={200}
                title={ props.product.brand }
                src={ '/img/' + props.product.image }
                alt={ props.product.brand }
            />
            {// <div>{ props.product.description }</div> 
            }
        </div>

    </div>
}
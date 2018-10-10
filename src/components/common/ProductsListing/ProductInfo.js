import React from 'react';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

export default function ProductListItem(props) {
    return <div>
        <h3>{ props.product.brand }</h3>
        <img 
            height={200}
            title={ props.product.brand }
            src={ '/img/' + props.product.image }
            alt={ props.product.brand }
        />
        <div>{ props.product.description }</div>
        <div>${ props.product.price }</div>
        <div>

            <AddButton 
                //What props shouls be passed? if we check 'AddButton.js', the components uses props.addToCart , props.product and props.cartItem 
                addToCart={props.addToCart}
                product={props.product}
                cartItem={props.cartItem}
            />

            {
                props.cartItem
                ?
                <RemoveButton 
                    removeFromCart={props.removeFromCart}
                    product={props.product}
                    cartItem={props.cartItem}
                />
                : null

            }

        </div>
    </div>
}
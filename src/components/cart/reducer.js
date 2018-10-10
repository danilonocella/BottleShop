//by filtering, it generates a new 'cart' array without the 'item' used as argument
const cartWithoutItem = ( cart, item ) => cart.filter(cartItem => cartItem.id !== item.id)

//checks if the item is in the cart or not
const itemInCart = ( cart, item ) => cart.filter(cartItem => cartItem.id === item.id)[0]

const addToCart = ( cart, item ) => {
    //Checks if the item is already in the cart
    const cartItem = itemInCart( cart, item )
    //if its not in the cart, so 'itemInCart()' returned undefined, it generates a new array with the item with qty = 1
    return cartItem === undefined ? [ ...cartWithoutItem(cart, item), { ...item, quantity: 1 }] : [ ...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
}

const removeFromCart = (cart, item) => {
                                                                                                        //gets all the properties from 'item' and update the quantity
    return item.quantity === 1 ? [ ...cartWithoutItem(cart, item) ] : [...cartWithoutItem(cart, item), {...item, quantity: item.quantity - 1} ]
}

const removeAllFromCart = (cart, item) => {
    return [ ...cartWithoutItem(cart, item) ] 
}





const cartReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD':
        //'state' corresponds to the cart, 'action.payload' is the item to be added
            return addToCart(state, action.payload)

        case 'REMOVE':
            return removeFromCart( state, action.payload )

        case 'REMOVE_ALL':
            return removeAllFromCart( state, action.payload )

        //always include a default which returns the current state
        default:
            return state;
    }
}

export default cartReducer;
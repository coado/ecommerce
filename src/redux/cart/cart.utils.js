export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existsCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
   
    if (existsCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    };

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};
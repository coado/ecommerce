import { createSelector} from 'reselect';

// input selector => returns slice of state
const selectCart = state => state.cart;

// output selector
export const selectCartItems = createSelector(
    [selectCart],
    // as input (cart) we get each element of selectCart array
    // this function returns cart.cartItems
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    // functions can get output selectors as input too. 
    [selectCartItems],
    cartItems =>  cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden 
)

export const selectCartTotal = createSelector( 
    [selectCartItems],
    cartItems =>  cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
)
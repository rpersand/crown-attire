const initialState = {
    hidden: true,
    cartItems: []
};

// action type

const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
const REDUCE_ITEM = 'REDUCE_ITEM';

// action creator

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItemFromCart = (item) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: item
});

export const reduceItem = (item) => ({
    type: REDUCE_ITEM,
    payload: item
});

const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const reduceItemFromCart = (cartItems, cartItemToReduce) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToReduce.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToReduce.id);
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToReduce.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        case REDUCE_ITEM: {
            return {
                ...state,
                cartItems: reduceItemFromCart(state.cartItems, action.payload)
            };
        }
        default:
            return state;
    }
};

export default cartReducer;
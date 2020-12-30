const initialState = {
    hidden: true
};

// action type

const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';

// action creator

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
};

export default cartReducer;
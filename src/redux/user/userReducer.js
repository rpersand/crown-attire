const initialState = {
    currentUser: null
};

//action

const SET_CURRENT_USER = 'SET_CURRENT_USER';

//action creater

const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
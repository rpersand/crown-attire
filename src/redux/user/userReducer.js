const initialState = {
    currentUser: null
};

//action type

const SET_CURRENT_USER = 'SET_CURRENT_USER';

//action creator

export const setCurrentUser = user => ({
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
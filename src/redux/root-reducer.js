import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';

// key is from where do you want persist to begin.
// whitelist is which reducers do you want to persist. we don't need to add user because
// user persistance is done by firebase auth
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
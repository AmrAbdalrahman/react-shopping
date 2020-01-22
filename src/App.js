import React from 'react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/orders';
import authReducer from './store/reducers/auth';
/*import ShopNavigator from './navigation/ShopNavigator';*/
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import NavigationContainer from "./navigation/NavigationContainer";

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    orders: orderReducer,
    auth: authReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(ReduxThunk),
));

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer/>
        </Provider>
    );
};

export default App;

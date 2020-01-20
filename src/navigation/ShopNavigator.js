import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    },
    headerTitleStyle: {
        fontFamily: 'OpenSans-Bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'OpenSans-Regular',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,

};

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Icon
                name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                size={23}
                color={drawerConfig.tintColor}
            />
        ),
    },
    defaultNavigationOptions: defaultNavOptions,
});

const AdminNavigator = createStackNavigator({
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen,
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Icon
                name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                size={23}
                color={drawerConfig.tintColor}
            />
        ),
    },
    defaultNavigationOptions: defaultNavOptions,
});

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen,
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Icon
                name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                size={23}
                color={drawerConfig.tintColor}
            />
        ),
    },
    defaultNavigationOptions: defaultNavOptions,
});

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
}, {
    contentOptions: {
        activeTintColor: Colors.primary,
    },
});

export default createAppContainer(ShopNavigator);

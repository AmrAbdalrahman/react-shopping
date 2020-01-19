import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';

const CartScreen = props => {

    const cartTotalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text>${cartTotalAmount}</Text></Text>
                <Button title={'Order Now'} onPress={() => {
                }}/>
            </View>
            <View>
                <text>CART ITEMS</text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
    },
    summaryText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
    },
    amount: {
        color: Colors.primary,
    },
});
export default CartScreen;

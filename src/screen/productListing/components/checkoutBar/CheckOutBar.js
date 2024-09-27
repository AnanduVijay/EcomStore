import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './CheckOutBar.styles';
import {ShoppingCartIcon} from 'react-native-heroicons/outline';
import {CartContext} from '../../../../context/CartContext';

const CheckOutBar = ({onPress}) => {
  const {cartItems} = useContext(CartContext);
  const totalProducts = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.offerPrice * item.quantity,
    0,
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.notch} />
      <View style={styles.container}>
        <View>
          <Text style={styles.itemText}>{totalProducts} Item</Text>
          <Text style={styles.itemText}>
            {'\u20B9'} {totalPrice}
          </Text>
        </View>
        <TouchableOpacity style={styles.checkoutbutton} onPress={onPress}>
          <Text style={styles.buttonText}>Checkout</Text>
          <ShoppingCartIcon size={20} color={'green'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOutBar;

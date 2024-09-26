import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CheckOutBar.styles';
import {ShoppingCartIcon} from 'react-native-heroicons/outline';

const CheckOutBar = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.notch} />
      <View style={styles.container}>
        <View>
          <Text style={styles.itemText}>3 Item</Text>
          <Text style={styles.itemText}>$600</Text>
        </View>
        <TouchableOpacity style={styles.checkoutbutton}>
          <Text style={styles.buttonText}>Checkout</Text>
          <ShoppingCartIcon size={20} color={'green'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOutBar;

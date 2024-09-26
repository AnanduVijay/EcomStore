import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CartItems.styles';

const CartItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>Siamese Hybrid Chicken</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>$200/kg</Text>
          <Text style={styles.originalPrice}>$250</Text>
          <View style={styles.offContainer}>
            <Text style={styles.offerText}>-20%</Text>
          </View>
        </View>
      </View>
      <View style={styles.quantityWraper}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.qtyButton}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>4 Nos</Text>
          <TouchableOpacity style={styles.qtyButton}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.totalText}>$ 400</Text>
      </View>
    </View>
  );
};

export default CartItems;

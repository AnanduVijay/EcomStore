import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './PriceCard.styles';
import {CartContext} from '../../../../context/CartContext';

const PriceCard = () => {
  const {cartItems} = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.offerPrice * item.quantity,
    0,
  );
  const deliveryFee = totalPrice + 30;
  const total = deliveryFee + totalPrice;
  return (
    <View style={styles.container}>
      <View style={styles.redeemContainer}>
        <Text style={styles.redeemTitle}>Do you have a promo code ? </Text>
        <TouchableOpacity>
          <Text style={styles.redeemText}>Redeem Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.priceDetailsBox}>
        <View style={styles.priceBox}>
          <Text style={styles.priceText}>Order total</Text>
          <Text style={styles.priceText}>
            {'\u20B9'}
            {totalPrice}
          </Text>
        </View>
        <View style={styles.priceBox}>
          <Text style={styles.priceText}>Delivey fee</Text>
          <Text style={styles.priceText}>
            {'\u20B9'}
            {deliveryFee}
          </Text>
        </View>
        <View style={styles.totalCostBox}>
          <Text style={styles.totalText}>Total cost</Text>
          <Text style={styles.totalText}>
            {'\u20B9'}
            {total}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PriceCard;

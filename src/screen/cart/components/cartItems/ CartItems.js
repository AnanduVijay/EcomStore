import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CartItems.styles';

const CartItems = ({
  title,
  price,
  offerPrice,
  quantity,
  onDecrementItem,
  onIncrementItem,
  selected,
  onPress,
}) => {
  const totalPrice = offerPrice * quantity;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {borderColor: selected ? '#08C25D' : 'transparent'},
      ]}>
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>
            {'\u20B9'}
            {offerPrice}/kg
          </Text>
          <Text style={styles.originalPrice}>
            {'\u20B9'}
            {price}
          </Text>
          <View style={styles.offContainer}>
            <Text style={styles.offerText}>-20%</Text>
          </View>
        </View>
      </View>
      <View style={styles.quantityWraper}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.qtyButton} onPress={onDecrementItem}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{quantity} Nos</Text>
          <TouchableOpacity style={styles.qtyButton} onPress={onIncrementItem}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.totalText}>
          {'\u20B9'}
          {totalPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartItems;

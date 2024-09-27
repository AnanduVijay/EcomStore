import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './PriceCard.styles';

const PriceCard = () => {
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
          <Text style={styles.priceText}>568</Text>
        </View>
        <View style={styles.priceBox}>
          <Text style={styles.priceText}>Delivey fee</Text>
          <Text style={styles.priceText}>$565</Text>
        </View>
        <View style={styles.totalCostBox}>
          <Text style={styles.totalText}>Total cost</Text>
          <Text style={styles.totalText}>$600</Text>
        </View>
      </View>
    </View>
  );
};

export default PriceCard;

import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './ProductCard.styles';

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.productImage}
        source={require('../../../../assets/images/products/Siamese.png')}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>Siamese Hybrid Chicken</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>#200/kg</Text>
          <View style={styles.offContainer}>
            <Text style={styles.productPrice}>-20%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

import {View, Text, Image, TouchableOpacity} from 'react-native';
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
          <Text style={styles.productPrice}>$200/kg</Text>
          <Text style={styles.originalPrice}>$250</Text>
          <View style={styles.offContainer}>
            <Text style={styles.offerText}>-20%</Text>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.qtyButton}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>2Nos</Text>
          <TouchableOpacity style={styles.qtyButton}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

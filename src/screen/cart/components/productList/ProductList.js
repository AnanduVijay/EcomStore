import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ProductList.styles';

const ProductList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.ProductImage}
          source={require('../../../../assets/images/products/Cabbage.png')}
        />
      </View>
      <Text style={styles.productTitle}>Cabbage</Text>
      <Text style={styles.productPrice}>$ 200</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductList;

import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Category.styles';
const Categoy = () => {
  return (
    <View style={styles.categoryContainer}>
      <Image
        style={styles.categoryImage}
        source={require('../../../../assets/images/category/rice.png')}
      />
      <Text style={styles.categoryText}>Rice</Text>
    </View>
  );
};

export default Categoy;

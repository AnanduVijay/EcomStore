import {View, Text} from 'react-native';
import React from 'react';
import styles from './PromoCode.styles';

const PromoCode = () => {
  return (
    <View style={styles.container}>
      <View style={styles.offerImg}>
        <Text style={styles.offerImgText}>%</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.mainTitle}>60% OFF upto Rs120</Text>
        <Text style={styles.subTitle}>Use code ZCRICKET</Text>
      </View>
    </View>
  );
};

export default PromoCode;

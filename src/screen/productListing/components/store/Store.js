import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Store.styles';

const Store = () => {
  const storeImage = require('../../../../assets/images/store.png');
  return (
    <View style={styles.container}>
      <Image style={styles.storeImage} source={storeImage} />
      <View style={styles.storeDetails}>
        <Text style={styles.storeTitle}>Store 1</Text>
        <Text style={styles.storeText}>
          Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum
        </Text>
      </View>
    </View>
  );
};

export default Store;

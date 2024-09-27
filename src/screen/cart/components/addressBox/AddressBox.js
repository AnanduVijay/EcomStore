import {View, Text} from 'react-native';
import React from 'react';
import styles from './AddressBox.styles';
import {PencilIcon} from 'react-native-heroicons/outline';

const AddressBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxTitle}>Delivery address</Text>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>
          416 Grandrose Ave. Des Plaines, IL 60016
        </Text>
        <PencilIcon color={'#D8D8D8'} size={25} />
      </View>
    </View>
  );
};

export default AddressBox;

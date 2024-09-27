import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DeliveryDay.styles';
const DeliveryDay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dayWraper}>
        <TouchableOpacity style={styles.dayButton1}>
          <Text style={styles.buttonText1}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayButton2}>
          <Text style={styles.buttonText2}>Tomorrow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryDay;

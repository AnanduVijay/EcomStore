import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ProceedCard.styles';

const ProceedCard = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProceedCard;

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DeliveryType.styles';
import {BoltIcon, ClockIcon} from 'react-native-heroicons/outline';

const DeliveryType = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.instantCard}>
        <BoltIcon size={34} color={'#D8D8D8'} />
        <Text style={styles.instantTitle}>Instant delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scheduledCard}>
        <ClockIcon size={34} color={'#08C25D'} />
        <Text style={styles.title}>Scheduled delivery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryType;

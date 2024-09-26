import {View, Text} from 'react-native';
import React from 'react';
import styles from './DeliveryType.styles';
import {BoltIcon, ClockIcon} from 'react-native-heroicons/outline';

const DeliveryType = () => {
  return (
    <View style={styles.container}>
      <View style={styles.instantCard}>
        <BoltIcon size={34} color={'grey'} />
        <Text>Instant delivery</Text>
      </View>
      <View style={styles.scheduledCard}>
        <ClockIcon size={34} color={'grey'} />
        <Text>Scheduled delivery</Text>
      </View>
    </View>
  );
};

export default DeliveryType;

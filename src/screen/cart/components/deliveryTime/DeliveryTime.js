import {View, Text} from 'react-native';
import React from 'react';
import styles from './DeliveryTime.styles';
import {SunIcon, MoonIcon} from 'react-native-heroicons/outline';

const DeliveryTime = () => {
  return (
    <View style={styles.container}>
      <View style={styles.morningContainer}>
        <View style={styles.titlContainer}>
          <Text style={styles.titleText}>Morning</Text>
          <SunIcon size={30} color={'black'} />
        </View>
        <Text style={styles.timeText}>10AM to 11AM</Text>
      </View>
      <View style={styles.EveningContainer}>
        <View style={styles.titlContainer}>
          <Text style={styles.titleText}>Evening</Text>
          <MoonIcon size={30} color={'black'} />
        </View>
        <Text style={styles.timeText}>2PM to 3PM</Text>
      </View>
      <View style={styles.EveningContainer}>
        <View style={styles.titlContainer}>
          <Text style={styles.titleText}>Evening</Text>
          <MoonIcon size={30} color={'black'} />
        </View>
        <Text style={styles.timeText}>6PM to 7PM</Text>
      </View>
    </View>
  );
};

export default DeliveryTime;

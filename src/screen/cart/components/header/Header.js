import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';

const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
      <ArrowLeftIcon size={30} color={'white'} onPress={onPress} />
      <Text style={styles.headerText}>Your order</Text>
      <Text></Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3AC77A',
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

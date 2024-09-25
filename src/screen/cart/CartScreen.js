import {View, Text, Button} from 'react-native';
import React from 'react';

const CartScreen = ({navigation}) => {
  return (
    <View>
      <Text>CartScreen</Text>
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default CartScreen;

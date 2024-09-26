import {View, Text, Button, ScrollView} from 'react-native';
import React from 'react';
import styles from './CartScreen.styles';
import CartItems from './components/cartItems/ CartItems';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import DeliveryType from './components/deliveyType/DeliveryType';

const CartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.navigate('Home')} />
      <ScrollView style={styles.wraper}>
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <Text style={styles.recomentationTitle}>Recommented</Text>
        <ScrollView horizontal={true}>
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
        </ScrollView>
        <DeliveryType />
      </ScrollView>
    </View>
  );
};

export default CartScreen;

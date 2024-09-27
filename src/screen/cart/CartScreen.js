import {View, Text, Button, ScrollView} from 'react-native';
import React from 'react';
import styles from './CartScreen.styles';
import CartItems from './components/cartItems/ CartItems';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import DeliveryType from './components/deliveyType/DeliveryType';
import DeliveryDay from './components/deliveryDay/DeliveryDay';
import DeliveryTime from './components/deliveryTime/DeliveryTime';
import AddressBox from './components/addressBox/AddressBox';
import PriceCard from './components/priceCard/PriceCard';
import ProceedCard from './components/proceedCard/ProceedCard';

const CartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.navigate('Home')} />
      <ScrollView contentContainerStyle={styles.wraper}>
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
        <DeliveryDay />
        <DeliveryTime />
        <AddressBox />
        <PriceCard />
        <ProceedCard />
      </ScrollView>
    </View>
  );
};

export default CartScreen;

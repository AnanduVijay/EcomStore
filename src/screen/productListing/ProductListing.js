import {
  View,
  SafeAreaView,
  Button,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './ProductListing.styles';
import Header from './components/header/Header';
import Store from './components/store/Store';
import PromoCode from './components/promocode/PromoCode';
import Categoy from './components/category/Categoy';
import ProductCard from './components/productCard/ProductCard';
import CheckOutBar from './components/checkoutBar/CheckOutBar';

const ProductListing = ({navigation}) => {
  const mainImage = require('../../assets/images/wall.jpg');
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <Header />
        <Image style={styles.mainImageContainer} source={mainImage} />
        <Store />
        <View>
          <ScrollView horizontal={true}>
            <PromoCode />
            <PromoCode />
            <PromoCode />
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 25,
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Categoy />
          <Categoy />
          <Categoy />
          <Categoy />
        </View>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
      <CheckOutBar onPress={() => navigation.navigate('Cart')} />
    </SafeAreaView>
  );
};

export default ProductListing;
